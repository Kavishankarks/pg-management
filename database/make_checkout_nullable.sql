-- Make check_out_date nullable for monthly PG bookings
ALTER TABLE bookings ALTER COLUMN check_out_date DROP NOT NULL;
