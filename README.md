# Currency-Rates-API

Simple currency rates converter API

Live URL: https://fortisnodeapi.herokuapp.com/

## Test this API:

Send a request to

https://fortisnodeapi.herokuapp.com/api/rates?base=CZK&currency=EUR,GBP,USD

## Expected Output

```
"results": {
  "base": "CZK",
  "date": "2020-11-17",
  "rates": {
    "EUR": 0.0377244605,
    "GBP": 0.033795458,
    "USD": 0.044824204
    }
}
```

## Tools

- Node.js
- Express.js
- Axios
- Exchange Rates API - https://api.exchangeratesapi.io/latest
