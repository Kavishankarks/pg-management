import express from 'express';
import {
  getUserBookings,
  getBookingById,
  createBooking,
  updateBooking,
  cancelBooking,
} from '../controllers/bookingController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticateToken);

router.get('/', getUserBookings);
router.get('/:id', getBookingById);
router.post('/', createBooking);
router.put('/:id', updateBooking);
router.delete('/:id', cancelBooking);

export default router;
