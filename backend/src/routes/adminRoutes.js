import express from 'express';
import {
  getAllUsers,
  deleteUser,
  getAllBookings,
  updateBookingStatus,
  getStats,
} from '../controllers/adminController.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

// All admin routes require authentication and admin role
router.use(authenticateToken);
router.use(authorizeRoles('admin'));

router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);
router.get('/bookings', getAllBookings);
router.put('/bookings/:id', updateBookingStatus);
router.get('/stats', getStats);

export default router;
