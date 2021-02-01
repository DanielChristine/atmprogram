// var [balance, accountPin] = require("./account");

function getBalance() {
    alert("You have: $" + balance + " monies.");
    menu();
  }
  
  // function withdraw(balance, userInput) {
  //   //are these parameters necessary? i see getBalance is using balance as an import, here it's a variable.
  //   while (i < 1) {
  //     balance - userInput + i;
  //     i++; //need to update balance after withdraw and deposit.
  //   }
  // }
  $("#withdraw").click(function () {
    jPrompt(
      "How many dollars would you like to withdraw?",
      "",
      "Withdraw",
      function (r) {
        if (r < balance) alert("Success! You have withdrawn $" + r);
        else
          alert(
            "Error! The requested amount exceeds your current account balance of $" +
              balance
          );
  
        var newBalance = balance - r;
      }
    );
  });
  
  function deposit() {}
  
  function getInput() {
    userInput = prompt("Enter digits.", chars);
    return userInput;
  }
  getInput();
  
  module.exports.getBalance = getBalance;
  module.exports.withdraw = withdraw;
  module.exports.deposit = deposit;
  module.exports.getInput = getInput;
  