import axios from 'axios';
import {
	getKeyValuePairsQueryParams,
	getQueryParameters,
	getRateBase,
	convertArrayofObjectsToObject,
	getConvertedRatesByBase,
	convertArrayOfStringsToArrayOfObjects,
	convertStringObjectValuesToNumber,
} from '../utils/utils.js';

const currencyRates = async (request, response) => {
	try {
		// Fetch currency rates from Currency Rates API
		const fetched = await axios.get('https://api.exchangeratesapi.io/latest');

		// Destructure rates from fetched data
		const { rates } = fetched.data;

		// Destructure user entries from request query
		const { base, currency } = request.query;

		// Get Query Parameters
		const fetchedCurrencies = getQueryParameters(base, currency);

		// Get key value pairs of Query Parameters
		const fetchedCurrencyValues = getKeyValuePairsQueryParams(
			rates,
			fetchedCurrencies
		);

		// Convert to array of objects
		const fetchedFromStringValues = convertArrayOfStringsToArrayOfObjects(
			fetchedCurrencyValues
		);

		// Get Rate Base
		const rateBase = getRateBase(fetchedFromStringValues);

		// Convert Array of objects to objects
		const fetchedRates = convertArrayofObjectsToObject(fetchedFromStringValues);

		// Get the Converted rates by base
		const newRates = getConvertedRatesByBase(fetchedRates, rateBase);

		// Convert new rates to Object
		const newRatesArrayOfObjects = convertArrayOfStringsToArrayOfObjects(
			newRates
		);

		// Convert array of objects to Object
		const newRatesObjects = convertArrayofObjectsToObject(
			newRatesArrayOfObjects
		);

		// Convert string object values to number
		convertStringObjectValuesToNumber(newRatesObjects);

		response.status(200).json({
			base: base.toString(),
			date: new Date().toLocaleDateString('en-GB'),
			rates: newRatesObjects,
		});
	} catch (error) {
		response.status(500).json({ success: false, message: error.message });
	}
};

export default currencyRates;
