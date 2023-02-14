export default class Exchange {
  static getExchange(currency, dollar) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}/${dollar}`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, currency, dollar]);
        } else {
          reject([this, response, currency, dollar]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}
