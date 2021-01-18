export const getQueryParameters = (base, currency) => {
	const fetchedCurrencies = currency.split(',');
	fetchedCurrencies.push(base);
	return fetchedCurrencies;
};

export const getKeyValuePairsQueryParams = (rates, fetchedCurrencies) => {
	let fetchedCurrencyValues = [];
	fetchedCurrencies.forEach((key) => {
		const value = rates[key];
		fetchedCurrencyValues.push(`${key} : ${value}`);
	});
	return fetchedCurrencyValues;
};

export const converToArrayOfObjects = (x) => {
	const y = x.split(':');
	return { [y[0].trim()]: y[1].trim() };
};

export const convertArrayOfStringsToArrayOfObjects = (item) => {
	return item.map(converToArrayOfObjects);
};

export const getRateBase = (fetchedFromStringValues) => {
	const newBase = fetchedFromStringValues.pop();
	const rateBase = Object.values(newBase)[0];
	return rateBase;
};

export const convertArrayofObjectsToObject = (arrayItem) => {
	return Object.assign({}, ...arrayItem);
};

export const getConvertedRatesByBase = (fetchedRates, rateBase) => {
	const entries = Object.entries(fetchedRates);
	return entries.map((entry) => {
		return `${entry[0]} : ${Number(entry[1]) * Number(1 / rateBase)}`;
	});
};

export const convertStringObjectValuesToNumber = (object) => {
	return Object.keys(object).forEach(function (el) {
		object[el] = Number(Number(object[el]).toFixed(5));
	});
};
