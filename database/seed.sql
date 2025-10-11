-- Sample data for development and testing

-- Insert sample users (password: 'password123' hashed with bcrypt)
INSERT INTO users (name, email, password, phone, role) VALUES
('Admin User', 'admin@bookpg.com', '$2b$10$UnND31hxAIkQ1Vnc4URGRu.9efli2FccyzdNpcL10dtd9KMdmPMLq', '1234567890', 'admin'),
('John Doe', 'john@example.com', '$2b$10$UnND31hxAIkQ1Vnc4URGRu.9efli2FccyzdNpcL10dtd9KMdmPMLq', '9876543210', 'user'),
('PG Owner', 'owner@example.com', '$2b$10$UnND31hxAIkQ1Vnc4URGRu.9efli2FccyzdNpcL10dtd9KMdmPMLq', '5555555555', 'owner');

-- Insert sample PGs
INSERT INTO pgs (owner_id, name, description, address, city, state, zip_code, latitude, longitude, price, amenities, images) VALUES
(3, 'Sunshine PG for Boys', 'Comfortable PG accommodation with all modern amenities. Close to IT parks and educational institutions.', '123 Main Street', 'Bangalore', 'Karnataka', '560001', 12.9716, 77.5946, 8000,
ARRAY['WiFi', 'AC', 'Laundry', 'Food', 'Parking', 'Security'],
ARRAY['https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800', 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800']),

(3, 'Green Valley PG for Girls', 'Safe and secure PG for working women with homely atmosphere.', '456 Park Avenue', 'Pune', 'Maharashtra', '411001', 18.5204, 73.8567, 7500,
ARRAY['WiFi', 'Food', 'Laundry', 'Security', 'Power Backup'],
ARRAY['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800', 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800']),

(3, 'Comfort Living PG', 'Affordable PG with great amenities and friendly environment.', '789 Lake Road', 'Hyderabad', 'Telangana', '500001', 17.3850, 78.4867, 9000,
ARRAY['WiFi', 'AC', 'Food', 'Gym', 'Parking', 'Security', 'TV'],
ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800', 'https://images.unsplash.com/photo-1502672260066-6bc35f0a1994?w=800']),

(3, 'City Center PG', 'Prime location PG in the heart of the city with excellent connectivity.', '321 Central Plaza', 'Mumbai', 'Maharashtra', '400001', 19.0760, 72.8777, 12000,
ARRAY['WiFi', 'AC', 'Food', 'Laundry', 'Parking', 'Security', 'Housekeeping'],
ARRAY['https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800']),

(3, 'Student Nest PG', 'Budget-friendly PG perfect for students near colleges and libraries.', '555 College Road', 'Delhi', 'Delhi', '110001', 28.7041, 77.1025, 6500,
ARRAY['WiFi', 'Food', 'Study Room', 'Security'],
ARRAY['https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800']);

-- Insert sample bookings
INSERT INTO bookings (user_id, pg_id, check_in_date, check_out_date, num_guests, total_price, status) VALUES
(2, 1, '2025-01-15', '2025-04-15', 1, 24000, 'confirmed'),
(2, 3, '2025-02-01', '2025-05-01', 1, 27000, 'pending');

-- Insert sample reviews
INSERT INTO reviews (user_id, pg_id, rating, comment) VALUES
(2, 1, 5, 'Excellent PG with great facilities. The owner is very cooperative and the food is delicious. Highly recommended!'),
(2, 2, 4, 'Good place to stay. Clean rooms and safe environment. Only issue is the WiFi speed could be better.');
