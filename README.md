# PG Booking Website

A full-stack web application for booking Paying Guest accommodations.

## Tech Stack

### Frontend
- React with Vite
- React Router DOM
- Axios
- TailwindCSS
- React Hook Form
- Date-fns

### Backend
- Node.js with Express
- PostgreSQL
- JWT Authentication
- bcrypt for password hashing

## Project Structure

```
bookpg/
├── frontend/          # React frontend application
├── backend/           # Express API server
├── database/          # Database schemas and migrations
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Configure your database credentials in .env
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Database Setup

```bash
cd database
psql -U postgres -f schema.sql
```

## Environment Variables

### Backend (.env)
```
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/bookpg
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## Features

- User authentication (register/login)
- Browse PG listings
- Advanced search and filters
- Booking management
- Reviews and ratings
- Admin panel
- Payment integration
- Google Maps integration

## API Endpoints

### Authentication
- POST /api/auth/register - Register new user
- POST /api/auth/login - User login
- GET /api/auth/profile - Get user profile

### PGs
- GET /api/pgs - Get all PG listings
- GET /api/pgs/:id - Get single PG details
- POST /api/pgs - Create new PG (owner/admin only)
- PUT /api/pgs/:id - Update PG (owner/admin only)
- DELETE /api/pgs/:id - Delete PG (owner/admin only)

### Bookings
- GET /api/bookings - Get user bookings
- POST /api/bookings - Create new booking
- PUT /api/bookings/:id - Update booking
- DELETE /api/bookings/:id - Cancel booking

### Reviews
- GET /api/reviews/:pgId - Get PG reviews
- POST /api/reviews - Create review
- PUT /api/reviews/:id - Update review
- DELETE /api/reviews/:id - Delete review

## License

MIT
