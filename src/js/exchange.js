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
//   static getExchange(currency, dollar) {
//     return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}/${dollar}`)
//       .then(function(response) {
//         if (!response.ok) {
//           const errorMessage = `${response.status} ${response.statusText}`;
//         throw new Error(errorMessage);
//       } else {
//         return response.json();
//       }
//   })
//   .catch(function(error) {
//     return error;
//   });
//   }
// }
