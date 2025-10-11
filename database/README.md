# Database Setup

This directory contains the database schema and seed data for the BookPG application.

## Prerequisites

- PostgreSQL (v14 or higher)
- psql command-line tool

## Setup Instructions

### 1. Create Database

```bash
# Login to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE bookpg;

# Exit
\q
```

### 2. Run Schema

```bash
# Run schema file
psql -U postgres -d bookpg -f schema.sql
```

### 3. (Optional) Load Sample Data

```bash
# Run seed file
psql -U postgres -d bookpg -f seed.sql
```

## Database Schema

### Tables

1. **users** - User accounts (customers, owners, admins)
2. **pgs** - PG listings
3. **bookings** - Booking records
4. **reviews** - User reviews for PGs

### Relationships

- `pgs.owner_id` → `users.id`
- `bookings.user_id` → `users.id`
- `bookings.pg_id` → `pgs.id`
- `reviews.user_id` → `users.id`
- `reviews.pg_id` → `pgs.id`

## Sample Credentials (from seed.sql)

All sample users have the password: `password123`

- Admin: `admin@bookpg.com`
- User: `john@example.com`
- Owner: `owner@example.com`

**Note**: Make sure to change these credentials in production!

## Useful Commands

```bash
# Connect to database
psql -U postgres -d bookpg

# List all tables
\dt

# Describe table structure
\d users
\d pgs
\d bookings
\d reviews

# View all users
SELECT * FROM users;

# View all PGs
SELECT * FROM pgs;

# Drop all tables (caution!)
DROP TABLE IF EXISTS reviews, bookings, pgs, users CASCADE;
```

## Backup and Restore

### Backup

```bash
pg_dump -U postgres bookpg > backup.sql
```

### Restore

```bash
psql -U postgres -d bookpg < backup.sql
```

## Production Notes

1. Change all default passwords
2. Set up proper database user with limited privileges
3. Enable SSL connections
4. Set up regular backups
5. Monitor query performance
6. Consider adding more indexes based on query patterns
