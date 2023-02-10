export class Exchange {

  static getExchange(currency1, currency2) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency1}/${currency2}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      } else {
        return response.json();
      }
  })
  .catch(function(error) {
    return error;
  });
  }
}
