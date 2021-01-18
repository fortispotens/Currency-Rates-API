import express from 'express';
import currencyRates from '../controllers/currencyRates.js';

const router = express.Router();

router.get('/', currencyRates);

export default router;
