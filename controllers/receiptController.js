import { calculatePoints } from '../utils/pointsCalculator.js';
import { v4 as uuidv4 } from 'uuid';

const receiptsDB = new Map();

export const processReceipt = (req, res) => {
  const receipt = req.body;
  const id = uuidv4();
  const points = calculatePoints(receipt);
  receiptsDB.set(id, points);
  res.json({ id }); 
};

export const getReceiptPoints = (req, res) => {
  const { id } = req.params;
  const points = receiptsDB.get(id);
  if (points === undefined) {
    return res.status(404).json({ error: 'Receipt not found' });
  }
  res.json({ points });
};