const atm = require("./atm.js");


function menu() {
        do {
    
    var userChoice = parseInt(prompt("Selection screen: 1) Balance 2) Deposit 3) Withdraw 4) Exit"));

    if (userChoice == 1, chars) {
      getBalance();
    } else if (userChoice == 2, chars) {
      deposit();
    } else if (userChoice == 3, chars) {
      withdraw();
    } else if (userChoice == 4, chars) {
      exit();
    } else {
      error();
    }
  }
  while(atm.validatePin)
}
function error() {
  alert("Please make a valid selection.");
  menu();
}


