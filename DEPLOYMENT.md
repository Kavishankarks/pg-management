# BookPG - Deployment Guide

This guide covers deploying the BookPG application to production.

## Deployment Options

### Frontend Deployment

#### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
cd frontend
vercel
```

3. **Environment Variables:**
In Vercel dashboard, add:
- `VITE_API_URL` = Your backend API URL

#### Option 2: Netlify

1. **Build the project:**
```bash
cd frontend
npm run build
```

2. **Deploy via Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

3. **Or use Netlify Dashboard:**
- Connect GitHub repository
- Set build command: `npm run build`
- Set publish directory: `dist`
- Add environment variable: `VITE_API_URL`

### Backend Deployment

#### Option 1: Railway (Recommended)

1. **Create Railway account:** [railway.app](https://railway.app)

2. **Create new project:**
- Click "New Project"
- Select "Deploy from GitHub repo"
- Choose your repository

3. **Configure:**
- Root directory: `backend`
- Start command: `npm start`

4. **Environment Variables:**
Add all variables from `.env`:
```
PORT=5000
NODE_ENV=production
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=
CORS_ORIGIN=
```

5. **Database:**
- Add PostgreSQL plugin in Railway
- Railway will auto-populate DB variables

#### Option 2: Render

1. **Create Render account:** [render.com](https://render.com)

2. **Create Web Service:**
- Connect GitHub repository
- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`

3. **Add Environment Variables** in Render dashboard

4. **Create PostgreSQL Database:**
- Create new PostgreSQL instance
- Copy connection string
- Add to `DATABASE_URL` env variable

#### Option 3: Heroku

1. **Install Heroku CLI:**
```bash
npm install -g heroku
```

2. **Login:**
```bash
heroku login
```

3. **Create app:**
```bash
cd backend
heroku create bookpg-api
```

4. **Add PostgreSQL:**
```bash
heroku addons:create heroku-postgresql:hobby-dev
```

5. **Set environment variables:**
```bash
heroku config:set JWT_SECRET=your_secret_here
heroku config:set NODE_ENV=production
```

6. **Deploy:**
```bash
git push heroku main
```

### Database Deployment

#### Option 1: Railway PostgreSQL

Railway provides managed PostgreSQL:
- Automatic backups
- Easy scaling
- Connection pooling

#### Option 2: Supabase

1. **Create Supabase project:** [supabase.com](https://supabase.com)
2. **Copy connection string**
3. **Run schema:**
```bash
psql "your_connection_string" < database/schema.sql
```

#### Option 3: AWS RDS

For production-grade deployments:
1. Create RDS PostgreSQL instance
2. Configure security groups
3. Enable automated backups
4. Set up read replicas (optional)

## Production Checklist

### Security

- [ ] Change all default passwords
- [ ] Use strong JWT secret (32+ characters)
- [ ] Enable HTTPS for all endpoints
- [ ] Set up rate limiting
- [ ] Enable CORS only for specific domains
- [ ] Sanitize user inputs
- [ ] Use prepared statements for SQL queries
- [ ] Set secure HTTP headers
- [ ] Enable database SSL connections
- [ ] Set up firewall rules

### Performance

- [ ] Enable gzip compression
- [ ] Set up CDN for static assets
- [ ] Add database indexes
- [ ] Implement caching (Redis)
- [ ] Enable connection pooling
- [ ] Optimize images
- [ ] Minimize bundle size
- [ ] Enable lazy loading

### Monitoring

- [ ] Set up error tracking (Sentry)
- [ ] Add application monitoring (New Relic, DataDog)
- [ ] Enable database monitoring
- [ ] Set up uptime monitoring
- [ ] Configure log aggregation
- [ ] Set up alerts for errors

### Backup

- [ ] Enable automated database backups
- [ ] Test backup restoration
- [ ] Set up file storage backups
- [ ] Document backup procedures

## Environment Variables for Production

### Backend

```env
PORT=5000
NODE_ENV=production

# Database - Use connection string or individual params
DATABASE_URL=postgresql://user:pass@host:5432/dbname
# OR
DB_HOST=your-db-host
DB_PORT=5432
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=bookpg

# JWT - Use strong secret
JWT_SECRET=your-super-secret-32-character-string-here
JWT_EXPIRE=7d

# CORS - Specific domain only
CORS_ORIGIN=https://yourdomain.com

# Optional
SENTRY_DSN=your-sentry-dsn
```

### Frontend

```env
VITE_API_URL=https://api.yourdomain.com/api
```

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Railway
        run: |
          # Add Railway deployment commands

  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        run: |
          # Add Vercel deployment commands
```

## SSL/HTTPS

### Vercel/Netlify
- Automatic SSL certificates
- No configuration needed

### Railway/Render
- Automatic SSL certificates
- Custom domains supported

### Self-Hosted
Use Let's Encrypt:
```bash
sudo certbot --nginx -d yourdomain.com
```

## Database Migration

For production database updates:

1. **Create migration file:**
```sql
-- migration_001.sql
ALTER TABLE pgs ADD COLUMN featured BOOLEAN DEFAULT false;
```

2. **Run migration:**
```bash
psql $DATABASE_URL < migration_001.sql
```

3. **Keep track of migrations:**
- Use migration tools like `node-pg-migrate`
- Or maintain a migrations table

## Scaling

### Horizontal Scaling
- Deploy multiple backend instances
- Use load balancer (NGINX, Railway)
- Enable session store (Redis)

### Database Scaling
- Add read replicas
- Enable connection pooling
- Optimize queries
- Add caching layer

### CDN
- Use Cloudflare or AWS CloudFront
- Cache static assets
- Enable edge caching

## Rollback Plan

1. **Keep previous version accessible**
2. **Database backup before migration**
3. **Use feature flags for gradual rollout**
4. **Document rollback procedures**

Example rollback:
```bash
# Vercel
vercel rollback

# Heroku
heroku rollback

# Railway
# Use Railway dashboard to redeploy previous version
```

## Monitoring & Logs

### Application Logs
```bash
# Railway
railway logs

# Heroku
heroku logs --tail

# Render
# Use Render dashboard
```

### Error Tracking

**Sentry Setup:**

1. Install:
```bash
npm install @sentry/node
```

2. Configure backend:
```javascript
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
```

## Cost Optimization

### Free Tier Options
- **Frontend:** Vercel/Netlify (free tier)
- **Backend:** Railway ($5/month), Render (free tier)
- **Database:** Supabase (free tier), Railway ($5/month)

### Estimated Costs (Monthly)
- **Hobby/Development:** $0-10
- **Small Production:** $20-50
- **Medium Scale:** $100-300

## Support & Maintenance

### Regular Tasks
- Monitor error logs
- Check performance metrics
- Update dependencies
- Review security alerts
- Backup verification
- Database optimization

### Update Schedule
- **Security patches:** Immediate
- **Minor updates:** Monthly
- **Major updates:** Quarterly

## Resources

- [Vercel Docs](https://vercel.com/docs)
- [Railway Docs](https://docs.railway.app)
- [Render Docs](https://render.com/docs)
- [PostgreSQL Best Practices](https://www.postgresql.org/docs/)
- [Node.js Production Guide](https://nodejs.org/en/docs/guides/)
