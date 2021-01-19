import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());

import currencyRatesRoutes from './routes/curencyRatesRoute.js';

app.get('/', (req, res) => res.send('URL parametes challenge'));

app.use('/api/rates', currencyRatesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
	console.debug(`App in ${process.env.NODE_ENV} is runing on on port ${PORT}`)
);
