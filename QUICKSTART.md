# Quick Start Guide

Get BookPG running in 5 minutes!

## Prerequisites Check

```bash
# Check Node.js (need v18+)
node --version

# Check PostgreSQL (need v14+)
psql --version

# Check npm
npm --version
```

If any are missing, install them first (see SETUP.md).

## Quick Setup

### 1. Database (2 minutes)

```bash
# Create database
psql -U postgres -c "CREATE DATABASE bookpg;"

# Run schema
psql -U postgres -d bookpg -f database/schema.sql

# (Optional) Load sample data
psql -U postgres -d bookpg -f database/seed.sql
```

### 2. Install Dependencies (1 minute)

```bash
# From project root
npm run install-all
```

Or install separately:

```bash
# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install
```

### 3. Configure Environment (1 minute)

**Backend:** Edit `backend/.env`
```env
DB_PASSWORD=your_postgres_password
JWT_SECRET=change_this_to_random_string
```

**Frontend:** Edit `frontend/.env` (already configured)
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Start Development Servers (1 minute)

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## Test It Out

1. Open http://localhost:5173
2. Click "Sign Up" and create an account
3. Browse PGs or use sample login:
   - Email: `john@example.com`
   - Password: `password123`

## Troubleshooting

### Can't connect to database?
```bash
# Check if PostgreSQL is running
psql -U postgres

# If not, start it:
# macOS: brew services start postgresql
# Linux: sudo service postgresql start
```

### Port already in use?
Change the port in `backend/.env`:
```env
PORT=5001
```

Then update `frontend/.env`:
```env
VITE_API_URL=http://localhost:5001/api
```

### Module not found errors?
```bash
rm -rf node_modules package-lock.json
npm install
```

## What's Next?

- ✅ Read [SETUP.md](SETUP.md) for detailed documentation
- ✅ Check [README.md](README.md) for API documentation
- ✅ See [DEPLOYMENT.md](DEPLOYMENT.md) for going live
- ✅ Review [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for architecture

## Quick Commands Reference

```bash
# Install all dependencies
npm run install-all

# Start backend
npm run dev:backend

# Start frontend
npm run dev:frontend

# Build frontend for production
npm run build:frontend

# View database
psql -U postgres -d bookpg
```

## Sample Data

If you loaded the seed data, you can use these accounts:

| Role  | Email                | Password      |
|-------|---------------------|---------------|
| Admin | admin@bookpg.com    | password123   |
| User  | john@example.com    | password123   |
| Owner | owner@example.com   | password123   |

**Note:** Change these in production!

## Project URLs

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000
- **API Docs:** http://localhost:5000 (JSON response)

## Need Help?

1. Check the error message in the terminal
2. Look at the Troubleshooting sections in SETUP.md
3. Verify environment variables are set correctly
4. Ensure database is running and accessible

## Development Tips

- Both servers support hot reload
- Check browser console for frontend errors
- Check terminal for backend errors
- Use browser DevTools Network tab to debug API calls

---

🎉 **You're all set!** Start building your PG booking platform!
