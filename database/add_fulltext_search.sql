-- Add full-text search capabilities to PGs table

-- Add a computed column for full-text search
ALTER TABLE pgs ADD COLUMN IF NOT EXISTS search_vector tsvector;

-- Create a function to update the search vector
CREATE OR REPLACE FUNCTION pgs_search_vector_update() RETURNS trigger AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('english', COALESCE(NEW.name, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.city, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.state, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.address, '')), 'C') ||
    setweight(to_tsvector('english', COALESCE(NEW.description, '')), 'D') ||
    setweight(to_tsvector('english', COALESCE(array_to_string(NEW.amenities, ' '), '')), 'C');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update search_vector
DROP TRIGGER IF EXISTS pgs_search_vector_trigger ON pgs;
CREATE TRIGGER pgs_search_vector_trigger
  BEFORE INSERT OR UPDATE ON pgs
  FOR EACH ROW EXECUTE FUNCTION pgs_search_vector_update();

-- Create GIN index for fast full-text search
CREATE INDEX IF NOT EXISTS idx_pgs_search_vector ON pgs USING GIN(search_vector);

-- Update existing rows to populate search_vector
UPDATE pgs SET search_vector =
  setweight(to_tsvector('english', COALESCE(name, '')), 'A') ||
  setweight(to_tsvector('english', COALESCE(city, '')), 'B') ||
  setweight(to_tsvector('english', COALESCE(state, '')), 'B') ||
  setweight(to_tsvector('english', COALESCE(address, '')), 'C') ||
  setweight(to_tsvector('english', COALESCE(description, '')), 'D') ||
  setweight(to_tsvector('english', COALESCE(array_to_string(amenities, ' '), '')), 'C');

-- Create a helper function for search ranking
CREATE OR REPLACE FUNCTION search_pgs(search_query TEXT)
RETURNS TABLE (
  id INTEGER,
  owner_id INTEGER,
  name VARCHAR(255),
  description TEXT,
  address VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  zip_code VARCHAR(20),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  price DECIMAL(10, 2),
  amenities TEXT[],
  images TEXT[],
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  rank REAL
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    p.*,
    ts_rank(p.search_vector, websearch_to_tsquery('english', search_query)) AS rank
  FROM pgs p
  WHERE p.search_vector @@ websearch_to_tsquery('english', search_query)
  ORDER BY rank DESC;
END;
$$ LANGUAGE plpgsql;
