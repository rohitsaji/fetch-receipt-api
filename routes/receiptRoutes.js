import { Router } from 'express';
import {
  processReceipt,
  getReceiptPoints
} from '../controllers/receiptController.js';

const router = Router();

router.post('/process', processReceipt);
router.get('/:id/points', getReceiptPoints);

export default router;