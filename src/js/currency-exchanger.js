export class CurrencyExchanger {

  static getExchange(currency, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}/${amount}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
        throw newError(errorMessage);
      } else {
        return response.json();
      }
  })
  .catch(function(error) {
    return error;
  });
  }
}
