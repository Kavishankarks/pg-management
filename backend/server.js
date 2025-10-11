import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js';
import pgRoutes from './src/routes/pgRoutes.js';
import bookingRoutes from './src/routes/bookingRoutes.js';
import reviewRoutes from './src/routes/reviewRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import { errorHandler } from './src/middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Allow multiple origins for development (localhost, network IP, and ngrok)
const allowedOrigins = [
  'http://localhost:5173',
  process.env.CORS_ORIGIN,
  process.env.NGROK_URL, // For ngrok tunnels
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    // Allow any origin in development that matches localhost or local network
    if (process.env.NODE_ENV === 'development') {
      const isLocalNetwork = origin.match(/^http:\/\/(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+):\d+$/);
      const isNgrok = origin.match(/\.ngrok(-free)?\.app$/);
      const isAllowed = allowedOrigins.includes(origin);

      if (isLocalNetwork || isNgrok || isAllowed) {
        return callback(null, true);
      }
    } else if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'BookPG API Server',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      pgs: '/api/pgs',
      bookings: '/api/bookings',
      reviews: '/api/reviews',
    },
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/pgs', pgRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/admin', adminRoutes);

// Error handler
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, '0.0.0.0', async () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Local: http://localhost:${PORT}`);

  // Try to get network IP addresses
  const os = await import('os');
  const networkInterfaces = os.networkInterfaces();
  const addresses = [];

  Object.values(networkInterfaces).forEach(interfaces => {
    interfaces.forEach(iface => {
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push(`http://${iface.address}:${PORT}`);
      }
    });
  });

  if (addresses.length > 0) {
    console.log(`Network: ${addresses.join(', ')}`);
  }
});
