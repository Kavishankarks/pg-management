import express from 'express';
import {
  getAllPGs,
  getPGById,
  createPG,
  updatePG,
  deletePG,
} from '../controllers/pgController.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllPGs);
router.get('/:id', getPGById);
router.post('/', authenticateToken, authorizeRoles('owner', 'admin'), createPG);
router.put('/:id', authenticateToken, authorizeRoles('owner', 'admin'), updatePG);
router.delete('/:id', authenticateToken, authorizeRoles('owner', 'admin'), deletePG);

export default router;
