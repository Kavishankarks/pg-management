# BookPG - Complete Setup Guide

This guide will walk you through setting up the entire BookPG application from scratch.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **PostgreSQL** (v14 or higher) - [Download](https://www.postgresql.org/download/)
- **npm** or **yarn** package manager
- **Git** (optional)

## Project Structure

```
bookpg/
├── frontend/          # React application (Vite)
├── backend/           # Express API server
├── database/          # PostgreSQL schemas and seeds
├── README.md          # Project documentation
└── SETUP.md          # This file
```

## Step-by-Step Setup

### 1. Database Setup

#### Create PostgreSQL Database

```bash
# Start PostgreSQL service (if not running)
# On macOS with Homebrew:
brew services start postgresql

# On Ubuntu/Debian:
sudo service postgresql start

# Login to PostgreSQL
psql -U postgres

# Inside psql prompt:
CREATE DATABASE bookpg;
\q
```

#### Run Database Schema

```bash
cd database
psql -U postgres -d bookpg -f schema.sql
```

#### (Optional) Load Sample Data

```bash
psql -U postgres -d bookpg -f seed.sql
```

This will create sample users, PGs, and bookings for testing.

**Sample Login Credentials:**
- Email: `john@example.com`
- Password: `password123`

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment variables
# Edit the .env file and update with your settings
# Especially update DB_PASSWORD and JWT_SECRET

# Start the development server
npm run dev
```

The backend server should now be running on `http://localhost:5000`

#### Verify Backend

Open your browser and visit `http://localhost:5000` - you should see:

```json
{
  "message": "BookPG API Server",
  "version": "1.0.0",
  "endpoints": {...}
}
```

### 3. Frontend Setup

Open a new terminal window:

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend application should now be running on `http://localhost:5173`

## Testing the Application

### 1. Register a New User

1. Open `http://localhost:5173` in your browser
2. Click "Sign Up" in the navigation bar
3. Fill in the registration form
4. Click "Create Account"

### 2. Browse PGs

1. Click "Browse PGs" in the navigation
2. View available PG listings
3. Click on any PG to see details

### 3. Make a Booking

1. While viewing PG details, click "Book Now"
2. Select check-in and check-out dates
3. Enter number of guests
4. Click "Confirm Booking"

### 4. View Your Bookings

1. Click "My Bookings" in the navigation
2. View all your bookings with status
3. Cancel pending bookings if needed

## Environment Variables

### Backend (.env)

```env
PORT=5000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password_here
DB_NAME=bookpg

# JWT
JWT_SECRET=change_this_to_a_secure_random_string
JWT_EXPIRE=7d

# CORS
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

## Troubleshooting

### Database Connection Issues

**Problem:** Cannot connect to PostgreSQL

**Solution:**
1. Ensure PostgreSQL is running: `psql -U postgres`
2. Check credentials in `backend/.env`
3. Verify database exists: `\l` in psql prompt

### Port Already in Use

**Problem:** Port 5000 or 5173 is already in use

**Solution:**
1. Change `PORT` in `backend/.env`
2. Update `VITE_API_URL` in `frontend/.env` accordingly
3. Or kill the process using the port

### Module Not Found Errors

**Problem:** Getting "Cannot find module" errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors

**Problem:** Getting CORS errors in browser console

**Solution:**
1. Ensure `CORS_ORIGIN` in `backend/.env` matches your frontend URL
2. Restart the backend server

## Development Tips

### Hot Reload

Both frontend and backend support hot reload:
- Frontend: Changes auto-refresh in browser
- Backend: Using nodemon, server restarts on file changes

### Database Management

View data directly:
```bash
psql -U postgres -d bookpg
SELECT * FROM users;
SELECT * FROM pgs;
SELECT * FROM bookings;
```

### API Testing

Use tools like:
- **Postman** - [Download](https://www.postman.com/)
- **Thunder Client** (VS Code extension)
- **curl** (command line)

Example API request:
```bash
curl http://localhost:5000/api/pgs
```

## Building for Production

### Backend

```bash
cd backend
npm start
```

### Frontend

```bash
cd frontend
npm run build
```

The build output will be in `frontend/dist/`

## Next Steps

After basic setup:

1. **Add Features:**
   - Payment gateway integration (Stripe/PayPal)
   - Google Maps integration
   - Image upload functionality
   - Email notifications
   - Admin dashboard

2. **Security:**
   - Change all default passwords
   - Use strong JWT secrets
   - Enable HTTPS in production
   - Add rate limiting
   - Implement input validation

3. **Deployment:**
   - Frontend: Vercel, Netlify
   - Backend: Railway, Render, Heroku
   - Database: Railway, Supabase, AWS RDS

4. **Testing:**
   - Write unit tests
   - Add integration tests
   - Set up CI/CD pipeline

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the API documentation in README.md
3. Check database schema in `database/schema.sql`

## License

MIT License - See LICENSE file for details

