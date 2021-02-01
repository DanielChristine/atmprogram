const account = require("./account.js");

function getBalance() {
  alert("You have: $" + balance);
}

function withdraw(userInput) {
  return (account.balance -= userInput);
}

function deposit(userInput) {
  return (account.balance += userInput);
}

function validatePin() {
  getInput();
  account.accountPin == userInput;
  if (account.accountPin == userInput) {
    true;
  } else {
    menu();
  }
}

function getInput() {
  userInput = parseInt("Enter digits.");
  return userInput;
}

module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.getInput = getInput;
module.exports.validatePin = validatePin;
