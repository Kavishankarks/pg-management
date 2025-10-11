import express from 'express';
import {
  getPGReviews,
  createReview,
  updateReview,
  deleteReview,
} from '../controllers/reviewController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/:pgId', getPGReviews);
router.post('/', authenticateToken, createReview);
router.put('/:id', authenticateToken, updateReview);
router.delete('/:id', authenticateToken, deleteReview);

export default router;
