import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange.js';
import Rates from './js/rates.js';

//Business Logic

function getExchange(currency, amount) {
  Exchange.getExchange(currency, amount)
  .then(function ("") {
    if ("") {
      printElements("", currency, amount);
    } else {
      printError("", currency, amount);
    }
  }); 
}
//response1

function getRate() {
  Rates.getRate()
  .then(function ("") {
    if ("") {
      printRates("", (""));
    } else {
      printError("", ());
    }
  });
}
//response4