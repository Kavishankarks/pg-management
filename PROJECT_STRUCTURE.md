# BookPG - Project Structure

Complete overview of the project architecture and file organization.

## Directory Structure

```
bookpg/
│
├── frontend/                          # React Frontend Application
│   ├── public/                        # Static public assets
│   ├── src/
│   │   ├── components/               # Reusable React components
│   │   │   ├── Navbar.jsx           # Navigation bar
│   │   │   ├── Footer.jsx           # Footer component
│   │   │   └── ProtectedRoute.jsx   # Route protection wrapper
│   │   │
│   │   ├── pages/                    # Page components
│   │   │   ├── Home.jsx             # Landing page
│   │   │   ├── Login.jsx            # Login page
│   │   │   ├── Register.jsx         # Registration page
│   │   │   ├── PGList.jsx           # PG listings page
│   │   │   ├── PGDetails.jsx        # PG detail page
│   │   │   ├── BookingPage.jsx      # Booking form page
│   │   │   ├── UserDashboard.jsx    # User bookings dashboard
│   │   │   └── Profile.jsx          # User profile page
│   │   │
│   │   ├── services/                 # API service layer
│   │   │   ├── api.js               # Axios instance with interceptors
│   │   │   ├── authService.js       # Authentication API calls
│   │   │   ├── pgService.js         # PG-related API calls
│   │   │   ├── bookingService.js    # Booking API calls
│   │   │   └── reviewService.js     # Review API calls
│   │   │
│   │   ├── contexts/                 # React Context providers
│   │   │   └── AuthContext.jsx      # Authentication context
│   │   │
│   │   ├── hooks/                    # Custom React hooks
│   │   ├── utils/                    # Utility functions
│   │   │
│   │   ├── App.jsx                   # Main app component
│   │   ├── main.jsx                  # Entry point
│   │   └── index.css                 # Global styles (Tailwind)
│   │
│   ├── .env                          # Environment variables
│   ├── .env.example                  # Environment template
│   ├── package.json                  # Dependencies and scripts
│   ├── vite.config.js                # Vite configuration
│   ├── tailwind.config.js            # Tailwind CSS config
│   └── postcss.config.js             # PostCSS config
│
├── backend/                          # Express Backend API
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js          # PostgreSQL connection
│   │   │
│   │   ├── controllers/              # Request handlers
│   │   │   ├── authController.js    # Authentication logic
│   │   │   ├── pgController.js      # PG CRUD operations
│   │   │   ├── bookingController.js # Booking operations
│   │   │   └── reviewController.js  # Review operations
│   │   │
│   │   ├── middleware/               # Express middleware
│   │   │   ├── auth.js              # JWT authentication
│   │   │   └── errorHandler.js      # Error handling
│   │   │
│   │   ├── routes/                   # API route definitions
│   │   │   ├── authRoutes.js        # /api/auth routes
│   │   │   ├── pgRoutes.js          # /api/pgs routes
│   │   │   ├── bookingRoutes.js     # /api/bookings routes
│   │   │   └── reviewRoutes.js      # /api/reviews routes
│   │   │
│   │   └── utils/                    # Utility functions
│   │       └── jwt.js                # JWT token helpers
│   │
│   ├── .env                          # Environment variables
│   ├── .env.example                  # Environment template
│   ├── package.json                  # Dependencies and scripts
│   └── server.js                     # Express app entry point
│
├── database/                         # Database files
│   ├── schema.sql                    # Database schema
│   ├── seed.sql                      # Sample data
│   └── README.md                     # Database documentation
│
├── .gitignore                        # Git ignore rules
├── README.md                         # Project documentation
├── SETUP.md                          # Setup instructions
├── DEPLOYMENT.md                     # Deployment guide
└── PROJECT_STRUCTURE.md              # This file
```

## Technology Stack

### Frontend
- **Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Routing:** React Router DOM 6.28.0
- **HTTP Client:** Axios 1.7.7
- **Form Handling:** React Hook Form 7.53.2
- **Styling:** TailwindCSS 3.4.15
- **Icons:** Lucide React 0.460.0
- **Notifications:** React Toastify 10.0.6
- **Date Handling:** date-fns 4.1.0

### Backend
- **Runtime:** Node.js
- **Framework:** Express 4.21.1
- **Database Driver:** node-postgres (pg) 8.13.1
- **Authentication:** JWT (jsonwebtoken 9.0.2)
- **Password Hashing:** bcrypt 5.1.1
- **Validation:** express-validator 7.2.1
- **File Upload:** multer 1.4.5
- **CORS:** cors 2.8.5
- **Environment:** dotenv 16.4.7

### Database
- **Database:** PostgreSQL 14+
- **Schema:** See `database/schema.sql`

## Architecture Overview

### Frontend Architecture

```
User Interface (React Components)
           ↓
    Context Providers (Auth)
           ↓
    Service Layer (API calls)
           ↓
    Axios Instance (with interceptors)
           ↓
    Backend API
```

### Backend Architecture

```
HTTP Request
     ↓
Express Router
     ↓
Middleware (Auth, Validation)
     ↓
Controller (Business Logic)
     ↓
PostgreSQL Database
     ↓
Response
```

## Key Features Implementation

### 1. Authentication System
- **Files:**
  - Frontend: `contexts/AuthContext.jsx`, `services/authService.js`
  - Backend: `controllers/authController.js`, `middleware/auth.js`
- **Features:**
  - User registration
  - Login/logout
  - JWT token management
  - Protected routes
  - Role-based access control

### 2. PG Management
- **Files:**
  - Frontend: `pages/PGList.jsx`, `pages/PGDetails.jsx`
  - Backend: `controllers/pgController.js`
- **Features:**
  - List all PGs
  - View PG details
  - Search and filter
  - CRUD operations (owner/admin)

### 3. Booking System
- **Files:**
  - Frontend: `pages/BookingPage.jsx`, `pages/UserDashboard.jsx`
  - Backend: `controllers/bookingController.js`
- **Features:**
  - Create bookings
  - View user bookings
  - Cancel bookings
  - Price calculation

### 4. Review System
- **Files:**
  - Frontend: `pages/PGDetails.jsx` (review display)
  - Backend: `controllers/reviewController.js`
- **Features:**
  - Add reviews
  - Rate PGs (1-5 stars)
  - View all reviews
  - Update/delete own reviews

## API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - Create new user
- `POST /login` - User login
- `GET /profile` - Get user profile (protected)
- `PUT /profile` - Update profile (protected)

### PGs (`/api/pgs`)
- `GET /` - Get all PGs (with filters)
- `GET /:id` - Get single PG
- `POST /` - Create PG (owner/admin only)
- `PUT /:id` - Update PG (owner/admin only)
- `DELETE /:id` - Delete PG (owner/admin only)

### Bookings (`/api/bookings`)
- `GET /` - Get user bookings (protected)
- `GET /:id` - Get single booking (protected)
- `POST /` - Create booking (protected)
- `PUT /:id` - Update booking (protected)
- `DELETE /:id` - Cancel booking (protected)

### Reviews (`/api/reviews`)
- `GET /:pgId` - Get all reviews for a PG
- `POST /` - Create review (protected)
- `PUT /:id` - Update review (protected)
- `DELETE /:id` - Delete review (protected)

## Database Schema

### Tables
1. **users** - User accounts
2. **pgs** - PG listings
3. **bookings** - Booking records
4. **reviews** - User reviews

### Relationships
- Users → PGs (one-to-many: owner relationship)
- Users → Bookings (one-to-many)
- Users → Reviews (one-to-many)
- PGs → Bookings (one-to-many)
- PGs → Reviews (one-to-many)

## State Management

### Frontend State
- **Global State:** AuthContext (user authentication)
- **Local State:** Component-level useState hooks
- **Server State:** API calls with loading/error states

### Backend State
- **Stateless API:** No session storage
- **JWT Tokens:** For maintaining user sessions
- **Database:** Single source of truth

## Security Features

### Implemented
- ✅ JWT-based authentication
- ✅ Password hashing (bcrypt)
- ✅ Protected routes (frontend & backend)
- ✅ CORS configuration
- ✅ SQL injection prevention (parameterized queries)
- ✅ Role-based authorization

### Recommended for Production
- 🔲 Rate limiting
- 🔲 Input sanitization
- 🔲 HTTPS enforcement
- 🔲 Security headers (helmet)
- 🔲 CSRF protection
- 🔲 XSS prevention

## Development Workflow

### Starting Development

```bash
# Terminal 1 - Database
psql -U postgres -d bookpg

# Terminal 2 - Backend
cd backend
npm run dev

# Terminal 3 - Frontend
cd frontend
npm run dev
```

### Code Organization

- **Components:** Reusable UI elements
- **Pages:** Route-level components
- **Services:** API abstraction layer
- **Controllers:** Business logic handlers
- **Middleware:** Request/response processors

## Testing Strategy

### Unit Tests (Recommended)
- Component tests (React Testing Library)
- Service function tests
- Controller logic tests
- Utility function tests

### Integration Tests (Recommended)
- API endpoint tests
- Database query tests
- Authentication flow tests

### E2E Tests (Recommended)
- User registration flow
- Booking creation flow
- Full user journey

## Performance Considerations

### Frontend
- Code splitting with React.lazy
- Image optimization
- Lazy loading for routes
- Memoization (useMemo, useCallback)

### Backend
- Database indexing
- Connection pooling
- Caching strategies
- Query optimization

### Database
- Indexes on frequently queried columns
- Proper data types
- Regular VACUUM operations

## Scaling Considerations

### Horizontal Scaling
- Stateless API design enables multiple instances
- Load balancer for distributing traffic
- Session store (Redis) if needed

### Vertical Scaling
- Database connection pooling
- Query optimization
- Caching layer (Redis)
- CDN for static assets

## Future Enhancements

### Phase 2 Features
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] SMS notifications
- [ ] Google Maps integration
- [ ] Image upload to cloud storage
- [ ] Advanced search filters
- [ ] Wishlist functionality

### Phase 3 Features
- [ ] Chat system (owner-user)
- [ ] Virtual tours
- [ ] Mobile app (React Native)
- [ ] Admin analytics dashboard
- [ ] Multi-language support
- [ ] Social media integration

## Contributing Guidelines

1. Follow the existing code structure
2. Use meaningful variable/function names
3. Comment complex logic
4. Write tests for new features
5. Update documentation
6. Follow Git commit conventions

## Documentation Files

- **README.md** - Project overview and API docs
- **SETUP.md** - Local development setup
- **DEPLOYMENT.md** - Production deployment guide
- **PROJECT_STRUCTURE.md** - This file
- **database/README.md** - Database documentation

## Useful Commands

### Frontend
```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Lint code
```

### Backend
```bash
npm run dev        # Start with nodemon
npm start          # Start production server
```

### Database
```bash
psql -U postgres -d bookpg < database/schema.sql  # Run schema
psql -U postgres -d bookpg < database/seed.sql    # Run seeds
```

## Support & Resources

- **GitHub Issues** - Bug reports and feature requests
- **Documentation** - README.md and related docs
- **API Testing** - Use Postman or Thunder Client
- **Database GUI** - pgAdmin or DBeaver

---

Last Updated: 2025-10-07
Version: 1.0.0
