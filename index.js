import express from "express";
import receiptRoutes from './routes/receiptRoutes.js';

const app = express();
const PORT= 3000;
app.use(express.json());
app.use('/receipts', receiptRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});