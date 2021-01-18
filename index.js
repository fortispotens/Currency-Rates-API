import express from 'express';

const app = express();

import currencyRatesRoutes from './routes/curencyRatesRoute.js';

app.get('/', (req, res) => res.send('URL parametes challenge'));

app.use('/api/rates', currencyRatesRoutes);

app.listen(5000, () => console.debug(`App running on port 5000`));
