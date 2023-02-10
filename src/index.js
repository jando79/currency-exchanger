import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange.js';
import Rates from './js/rates.js';

//Business Logic

function getExchange(currency1, currency2) {
  Exchange.getExchange(currency1, currency2)
  .then(function (response) {
    if (response) {
      printElements(response, currency1, currency2);
    } else {
      printError(response, currency1, currency2);
    }
  }); 
}

function printRates(data) {
   document.getElementById("CAD").innerText = 'CAD: ${data.conversion_rates.CAD}';
   document.getElementById("MXN").innerText = 'MXN: ${data.conversion_rates.MXN}';
   document.getElementById("BRL").innerText = 'BRL: ${data.conversion_rates.BRL}';
   document.getElementById("CNY").innerText = 'CNY: ${data.conversion_rates.CNY}';
   document.getElementById("JPY").innerText = 'JPY: ${data.conversion_rates.JPY}';
   document.getElementById("RUB").innerText = 'RUB: ${data.conversion_rates.RUB}';
   document.getElementById("EUR").innerText = 'EUR: ${data.conversion_rates.EUR}';
   document.getElementById("GBP").innerText = 'GBP: ${data.conversion_rates.GBP}';
}

// function getRate() {
//   Rates.getRate()
//   .then(function ("") {
//     if ("") {
//       printRates("", (""));
//     } else {
//       printError("", ());
//     }
//   });
// }
//response4

// UI

function printError(request, search) {
  document.querySelector('output').innerText = `There was an error accessing currency exchange rates ${search}: ${request.status} ${request.statusText}`;
}

function printElements(data) {
  document.getElementById("output").innerText = `That will get you ${data[0].conversion_result.toFixed(2)} in ${data[0].target_code}`;
}

// function printError(noInfo) {
//   if (noInfo[0].status === 404) {
//     document.getElementById("output").innerText = "No such currency.";
//   } else {
//     document.getElementById("output").innerText = `There was an error in currency conversion: ${noInfo[0].status} ${noInfo[1].result}`;
//   }
// }

function handleFormSubmission(event) {
  event.preventDefault();
  const currency1 = document.getElementById("currency1").value;
  const currency2 = document.getElementById("currency2").value;
  getExchange(currency1, currency2);
}

window.addEventListener("load", function() {
  document.getElementById("input-form").addEventHandler("submit", handleFormSubmission);
});

