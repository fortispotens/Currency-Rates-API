import axios from 'axios';

const currencyRates = async (req, res) => {
	const fetched = await axios.get('https://api.exchangeratesapi.io/latest');

	const { rates } = fetched.data;
	const { base, currency } = req.query;

	console.log('>>>>rates', rates);
	console.log('>>>>base', base);
	console.log('>>>>currency', currency);
};

export default currencyRates;
