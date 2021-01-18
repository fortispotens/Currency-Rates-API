import axios from 'axios';

const currencyRates = async (req, res) => {
	const fetched = await axios.get('https://api.exchangeratesapi.io/latest');

	const { rates } = fetched.data;
	const { base, currency } = req.query;

	const fetchedCurrencies = currency.split(',');

	fetchedCurrencies.push(base);

	let fetchedCurrencyValues = [];
	fetchedCurrencies.forEach((key) => {
		const value = rates[key];
		fetchedCurrencyValues.push(`${key} : ${value}`);
	});

	const splitfetchedCurrencyValues = (x) => {
		const y = x.split(':');
		return { [y[0].trim()]: y[1].trim() };
	};

	const fetchedFromStringValues = fetchedCurrencyValues.map(
		splitfetchedCurrencyValues
	);

	const newBase = fetchedFromStringValues.pop();

	const newConvertedBase = Object.values(newBase)[0];

	const fetchRates = Object.assign({}, ...fetchedFromStringValues);

	const entries = Object.entries(fetchRates);

	const newRates = entries.map((entry) => {
		return `${entry[0]} : ${Number(entry[1]) * Number(1 / newConvertedBase)}`;
	});

	const obj = newRates.map(splitfetchedCurrencyValues);

	const convertedRates = Object.assign({}, ...obj);

	Object.keys(convertedRates).forEach(function (el) {
		convertedRates[el] = Number(Number(convertedRates[el]).toFixed(5));
	});

	console.log('>>>>>>', convertedRates);

	const userResponse = {
		base: base.toString(),
		date: new Date().toLocaleDateString('en-GB'),
		rates: convertedRates,
	};
	console.log('>>>>>>', userResponse);

	res.send(userResponse);
};

export default currencyRates;
