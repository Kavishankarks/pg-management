# BookPG - Project Documentation

## Project Overview

BookPG is a paying guest (PG) accommodation booking platform built with React (Vite) frontend and Express.js backend with PostgreSQL database. The platform allows users to search, view, and book PG accommodations, with separate interfaces for regular users, PG owners, and administrators.

## Current Status (Last Updated: October 10, 2025)

### Recently Completed Tasks

1. **Fixed Admin Login Issue**
   - Problem: Backend server was crashing due to syntax error in `server.js:77`
   - Root Cause: `await import('os')` was used in non-async callback function
   - Solution: Added `async` keyword to the `app.listen()` callback function
   - Admin credentials working: `admin@bookpg.com` / `password123`

2. **Network Access Configuration**
   - Configured both frontend and backend for local network access
   - Backend listening on `0.0.0.0` (all interfaces)
   - CORS configured to accept local network connections
   - Frontend and backend accessible via network IP: `192.168.0.111`

3. **Footer Branding**
   - Added "Built by Recnos Inc" attribution at bottom of footer
   - Located in `/Users/kavishankarks/Documents/GitHub/bookpg/frontend/src/components/Footer.jsx:118-120`

## Technology Stack

### Frontend
- **Framework**: React 18 with Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Icons**: Lucide React
- **State Management**: Context API (AuthContext)

### Backend
- **Runtime**: Node.js with ES Modules
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Environment**: dotenv for configuration

## Project Structure

```
bookpg/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx (Updated with Recnos Inc branding)
│   │   │   └── PGForm.jsx (Form for creating/editing PGs)
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── AdminDashboard.jsx (Admin panel with full CRUD)
│   │   │   └── ...
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env (API URL configuration)
│   └── vite.config.js (Network access enabled)
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── adminController.js
│   │   │   └── ...
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── adminRoutes.js
│   │   │   └── ...
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── errorHandler.js
│   │   └── utils/
│   │       └── jwt.js
│   ├── server.js (Fixed async callback issue)
│   └── .env
├── database/
│   ├── schema.sql
│   └── seed.sql (Contains bcrypt hashed passwords)
└── NETWORK_ACCESS.md (Network configuration guide)
```

## Current Configuration

### Frontend (.env)
```env
VITE_API_URL=http://192.168.0.111:5001/api
```

### Backend (.env)
```env
PORT=5001
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_USER=kavishankarks
DB_PASSWORD=
DB_NAME=bookpg
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
CORS_ORIGIN=http://192.168.0.111:5173
```

### Server Configuration (server.js)
- Port: 5001
- Listening on: 0.0.0.0 (all network interfaces)
- CORS: Configured for development with support for:
  - localhost connections
  - Local network IPs (192.168.x.x, 10.x.x.x)
  - ngrok/localtunnel domains (*.ngrok-free.app, *.loca.lt)

### Vite Configuration (vite.config.js)
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses including LAN
    port: 5173,
  },
})
```

## Network Access

### Local Access
- **Frontend**: http://localhost:5173/
- **Backend**: http://localhost:5001

### Network Access (Same WiFi)
- **Frontend**: http://192.168.0.111:5173/
- **Backend**: http://192.168.0.111:5001

### CORS Configuration
The backend automatically allows requests from:
- localhost origins
- Local network IP ranges in development mode
- ngrok and localtunnel domains
- Configured origin in CORS_ORIGIN env variable

## Database Schema

### Users Table
- `id` (Primary Key)
- `name`
- `email` (Unique)
- `password` (bcrypt hashed)
- `phone`
- `role` (admin/owner/user)
- `created_at`
- `updated_at`

### PGs Table
- `id` (Primary Key)
- `owner_id` (Foreign Key to users)
- `name`
- `description`
- `address`
- `city`
- `state`
- `pincode`
- `price`
- `gender` (male/female/any)
- `pg_type` (single/double/triple)
- `amenities` (JSON)
- `images` (JSON array)
- `available_rooms`
- `total_rooms`
- `status` (active/inactive)
- `created_at`
- `updated_at`

### Bookings Table
- `id` (Primary Key)
- `user_id` (Foreign Key)
- `pg_id` (Foreign Key)
- `check_in_date`
- `check_out_date`
- `status` (pending/confirmed/cancelled/completed)
- `total_amount`
- `created_at`
- `updated_at`

### Reviews Table
- `id` (Primary Key)
- `user_id` (Foreign Key)
- `pg_id` (Foreign Key)
- `rating` (1-5)
- `comment`
- `created_at`

## Authentication & Authorization

### User Roles
1. **Admin** - Full system access, user management, PG management, booking management
2. **Owner** - Can manage their own PGs and view bookings for their properties
3. **User** - Can search PGs, make bookings, leave reviews

### Authentication Flow
1. User registers or logs in via `/api/auth/register` or `/api/auth/login`
2. Server validates credentials and returns JWT token
3. Frontend stores token in AuthContext
4. Token included in Authorization header for protected routes
5. Backend middleware (`authenticateToken`) validates token
6. Role-based middleware (`authorizeRoles`) checks user permissions

### Password Security
- Passwords hashed using bcrypt (salt rounds: 10)
- All seed users have password: `password123`
- Bcrypt hash: `$2b$10$UnND31hxAIkQ1Vnc4URGRu.9efli2FccyzdNpcL10dtd9KMdmPMLq`

## Admin Features

### Admin Dashboard (AdminDashboard.jsx)
The admin panel includes:

1. **Overview Tab**
   - Statistics cards showing:
     - Total Users
     - Total PGs
     - Total Bookings
     - Total Revenue

2. **Users Tab**
   - View all registered users
   - User details (name, email, role, registration date)
   - Delete user functionality

3. **PGs Tab**
   - View all PG listings
   - Add new PG
   - Edit existing PG
   - Delete PG
   - View PG details (price, location, status, owner)

4. **Bookings Tab**
   - View all bookings
   - Booking details (user, PG, dates, amount, status)
   - Update booking status

### PG Form (PGForm.jsx)
Comprehensive form for creating and editing PG listings:
- Basic Information: name, price, gender, type
- Location: address, city, state, pincode
- Capacity: total and available rooms
- Amenities: multi-select checkboxes
- Images: URL input (multiple)
- Description: textarea
- Status: active/inactive

## API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - User registration
- `POST /login` - User login
- `GET /profile` - Get current user profile (protected)
- `PUT /profile` - Update user profile (protected)

### Admin (`/api/admin`)
All routes require admin role:
- `GET /users` - Get all users
- `DELETE /users/:id` - Delete user
- `GET /bookings` - Get all bookings
- `PUT /bookings/:id` - Update booking status
- `GET /stats` - Get system statistics

### PGs (`/api/pgs`)
- `GET /` - Get all PGs (with filters)
- `GET /:id` - Get single PG
- `POST /` - Create PG (owner/admin)
- `PUT /:id` - Update PG (owner/admin)
- `DELETE /:id` - Delete PG (owner/admin)

### Bookings (`/api/bookings`)
- `GET /` - Get user's bookings (protected)
- `GET /:id` - Get single booking (protected)
- `POST /` - Create booking (protected)
- `PUT /:id` - Update booking (protected)
- `DELETE /:id` - Cancel booking (protected)

### Reviews (`/api/reviews`)
- `GET /pg/:pgId` - Get reviews for PG
- `POST /` - Create review (protected)
- `PUT /:id` - Update review (protected)
- `DELETE /:id` - Delete review (protected)

## Known Issues & Fixes

### Issue 1: Backend Syntax Error (FIXED)
**Problem**: Server crashed with `SyntaxError: Unexpected reserved word` at line 83
**Cause**: `await import('os')` used in non-async function
**Fix**: Added `async` keyword to `app.listen()` callback
**Location**: `/Users/kavishankarks/Documents/GitHub/bookpg/backend/server.js:77`

### Issue 2: Port Conflicts (FIXED)
**Problem**: Port 5000/5001 already in use
**Fix**: Killed conflicting processes using `lsof -ti:PORT | xargs kill -9`

### Issue 3: CSS Build Error (RESOLVED)
**Problem**: Tailwind CSS error - `hover:shadow-glow` class doesn't exist
**Status**: Resolved by server restart, custom shadow effects removed from @apply

### Issue 4: Invalid Password Hash (FIXED)
**Problem**: Admin login failing due to incomplete bcrypt hash in seed.sql
**Fix**: Generated proper bcrypt hash and updated database and seed.sql

### Issue 5: Missing Admin Features (FIXED)
**Problem**: Admin users saw same interface as regular users
**Fix**: Created comprehensive AdminDashboard with full CRUD operations

### Issue 6: PG Form Layout Issues (FIXED)
**Problem**: Name field had layout problems
**Fix**: Restructured form from nested grid to section-based layout with proper responsive classes

## Development Workflow

### Starting the Application

1. **Start Backend**
   ```bash
   cd backend
   npm run dev
   ```
   Server runs on port 5001

2. **Start Frontend**
   ```bash
   cd frontend
   npm run dev
   ```
   Server runs on port 5173

### Running Background Shells
Multiple background processes are currently running:
- Backend servers (multiple instances)
- Frontend servers (multiple instances)
- ngrok tunnels (for internet access)
- localtunnel instances

### Testing Login
Use these credentials:
- **Admin**: admin@bookpg.com / password123
- **User**: john@example.com / password123
- **Owner**: owner@example.com / password123

## Deployment Considerations

### Frontend Deployment Options
- Vercel (recommended)
- Netlify
- GitHub Pages

### Backend Deployment Options
- Render
- Railway
- Fly.io
- Heroku

### Database Deployment Options
- Neon (PostgreSQL)
- Supabase
- Railway PostgreSQL

### Security Notes for Production
1. Change JWT_SECRET to a secure random string
2. Set NODE_ENV=production
3. Configure proper CORS origins (no wildcards)
4. Use HTTPS for all connections
5. Set up proper database user with limited permissions
6. Enable rate limiting
7. Implement request validation
8. Set up logging and monitoring
9. Use environment-specific configuration
10. Enable database connection pooling

## File Locations

### Key Configuration Files
- Frontend API Config: `/Users/kavishankarks/Documents/GitHub/bookpg/frontend/.env`
- Backend Config: `/Users/kavishankarks/Documents/GitHub/bookpg/backend/.env`
- Server Setup: `/Users/kavishankarks/Documents/GitHub/bookpg/backend/server.js`
- Vite Config: `/Users/kavishankarks/Documents/GitHub/bookpg/frontend/vite.config.js`

### Key Component Files
- Admin Dashboard: `/Users/kavishankarks/Documents/GitHub/bookpg/frontend/src/pages/AdminDashboard.jsx`
- PG Form: `/Users/kavishankarks/Documents/GitHub/bookpg/frontend/src/components/PGForm.jsx`
- Navbar: `/Users/kavishankarks/Documents/GitHub/bookpg/frontend/src/components/Navbar.jsx`
- Footer: `/Users/kavishankarks/Documents/GitHub/bookpg/frontend/src/components/Footer.jsx`

### Backend Controllers
- Auth: `/Users/kavishankarks/Documents/GitHub/bookpg/backend/src/controllers/authController.js`
- Admin: `/Users/kavishankarks/Documents/GitHub/bookpg/backend/src/controllers/adminController.js`

### Database Files
- Schema: `/Users/kavishankarks/Documents/GitHub/bookpg/database/schema.sql`
- Seed Data: `/Users/kavishankarks/Documents/GitHub/bookpg/database/seed.sql`

## Troubleshooting

### Backend Won't Start
1. Check if port is in use: `lsof -i:5001`
2. Kill process: `lsof -ti:5001 | xargs kill -9`
3. Check database connection
4. Verify .env file exists and has correct values

### Frontend Can't Connect to Backend
1. Check VITE_API_URL in frontend/.env
2. Verify backend is running
3. Check CORS configuration
4. Clear browser cache
5. Check network connectivity

### Login Not Working
1. Verify database has user records
2. Check password hash is valid bcrypt
3. Verify JWT_SECRET is set
4. Check network requests in browser DevTools
5. Verify backend API endpoints are accessible

### Network Access Issues
1. Ensure both devices on same WiFi
2. Check firewall settings
3. Verify correct IP address
4. Test backend directly: `curl http://192.168.0.111:5001`
5. Check CORS configuration allows network IP

## ngrok/Localtunnel Setup

### Current Tunnel
- Tool: localtunnel
- Backend URL: `https://bookpg-1760079307.loca.lt`
- Status: Active (may change if restarted)

### ngrok Configuration
- Auth token stored in: `/Users/kavishankarks/Library/Application Support/ngrok/ngrok.yml`
- Note: Provided auth token was invalid (ERR_NGROK_107)

### Starting New Tunnel
```bash
# Localtunnel (current)
lt --port 5001 --subdomain bookpg-$(date +%s)

# ngrok (alternative)
ngrok http 5001
```

## Future Enhancements

### Planned Features
- Payment gateway integration
- Advanced search filters
- Map integration for PG locations
- Chat system between users and owners
- Booking calendar view
- Email notifications
- SMS notifications
- Photo upload functionality
- PG comparison feature
- Wishlist/favorites
- Rating and review moderation
- Owner dashboard
- Analytics and reporting

### Technical Improvements
- Implement Redis for caching
- Add rate limiting
- Set up CI/CD pipeline
- Add comprehensive testing (Jest, React Testing Library)
- Implement proper logging (Winston)
- Add API documentation (Swagger)
- Set up monitoring (Sentry, LogRocket)
- Optimize database queries
- Add database migrations
- Implement proper error tracking

## Contact & Support

**Project Owner**: Kavishankar KS
**Built by**: Recnos Inc
**Support Email**: support@bookpg.com

## Version History

### v1.0.0 (Current)
- Initial release with core booking functionality
- Admin dashboard with full CRUD operations
- User authentication and authorization
- Network access configuration
- Fixed critical backend syntax error
- Added company branding to footer

---

**Last Updated**: October 10, 2025
**Claude AI Session**: Context preserved for continuity
