import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange.js';
import Rates from './js/rates.js';

//Business Logic

function getExchange(currency, dollar) {
  Exchange.getExchange(currency, dollar)
  .then(function (response) {
    if (response) {
      printElements(response, currency, dollar);
    } else {
      printError(response, currency, dollar);
    }
  }); 
}

function getRate() {
  Rates.getRate()
  .then(function (response) {
    if (response) {
      printRates(response);
    } else {
      printRatesError(response);
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
   document.getElementById("ex-rates").removeAttribute("class");
}


// UI

function printRatesError(response) {
  document.querySelector('rates-error').innerText = `There was an error accessing currency exchange rates ${search}: ${request.status} ${request.statusText}`;
}

function printElements(data) {
  document.getElementById("output").innerText = `That will get you ${data[0].conversion_result.toFixed(2)} in ${data[0].target_code}`;
}

 function printError(noInfo) {
   if (noInfo[0].status === 404) {
     document.getElementById("output").innerText = "No such currency.";
   } else {
     document.getElementById("output").innerText = `There was an error in currency conversion: ${noInfo[0].status} ${noInfo[1].result}`;
   }
 }

function handleFormSubmission(event) {
  event.preventDefault();
  const dollar = document.getElementById("dollar").value;
  const currency = document.getElementById("currency").value;
  getExchange(dollar, currency);
}

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleFormSubmission);
  document.getElementById("see-rates").addEventListener("click", getRate);
});

