class Person {
  constructor(first, last, account, balance) {
    this.firstName = first;
    this.lastName = last;
    this.accountNumber = account;
    this.balance = parseFloat(balance);
  }
}

var you = new Person("John", "Doe", 1002, 2000)
var notYou = new Person("Jane", "Doe", 1003, 200)

function deposit(amount){
    you.balance += parseFloat(amount);
    window.alert("Deposit succesful")
}
function withdrawal(amount){
    if (you.balance - amount > 50 && amount > 50){
        you.balance -= amount;
        window.alert("Withdraw succesful")
        
    }
    else {
        window.alert("Withdrawal amount greater than balance or too little");
        }
}
function balance(){
    window.alert("Your balance is now " + you.balance);
    
}

function transfer(amount){
    if (you.balance - amount > 50 ){
        you.balance -= amount;
        notYou.balance += amount;
        window.alert("Transfer successful")
        window.alert("Your account balance is now " + you.balance)
    }
    else {
        window.alert("Transfer amount exceeds the balance")
        
    }
}

(function init() {
    while (true){
        var usersChoice = prompt(
            "Please Select Your Operation. \n 1 = Deposit \n 2 = Withdrawal \n  3 = Check Balance \n  4 = Transfer \n 5 = Exit "
          );

          if (usersChoice == 1){
            var amount = prompt("Enter amount to be depostied: ");
            if (isNaN(amount)){
              window.alert("Incorrect value submitted")
            }
            else deposit(amount);
          }
          else if (usersChoice == 2){
            var amount = parseInt(prompt("Enter amount to be withdrawn: "));
            if (isNaN(amount)){
              window.alert("Incorrect value submitted")
            }
            else withdrawal(amount);
          }
          else if (usersChoice == 3){
            balance();
          }
          else if (usersChoice == 4){
            var amount = parseInt(prompt("Enter amount to be transferred: "));
            if (isNaN(amount)){
              window.alert("Incorrect value submitted")
            }
            else transfer(amount);
          }
          else if (usersChoice == 5){
              break;
          }
          else window.alert("Unknown Command")
    }
  })();
