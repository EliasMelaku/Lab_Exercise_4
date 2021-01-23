(function init() {
  var usersChoice = prompt(
    "Please Select Your Operation. \n 1 = Addition \n 2 = Subtraction \n  3 = Multiplication \n  4 = Division \n  5 = Min and Max \n  6 = Square \n  7 = Average"
  );

  switch (usersChoice) {
    case "1":
      add();
      break;
    case "2":
      subtract();
      break;
    case "3":
      multiply();
      break;
    case "4":
      divide();
      break;
    case "5":
      minAndMax();
      break;
    case "6":
      square();
      break;
    case "7":
      average();
      break;
  }
})();

function add() {
  var userInput = prompt("Enter Numbers Separated by comma");
  let numbers;
  let sum = 0;
  numbers = userInput.split(",");

  numbers.forEach(function (number) {
    sum += Number(number);
  });
  console.log("Sum is " + sum);
}
function subtract() {
  var userInput = prompt("Enter The Numbers Separated By comma");
  let numbers;
  numbers = userInput.split(",");
  let difference = Number(numbers[0]);

  numbers.forEach(function (number, index) {
    if (index === 0) {
    } else {
      difference -= Number(number);
    }
  });
  console.log("Difference is " + difference);
}
function multiply() {
  var userInput = prompt("Enter The Numbers Separated By comma");
  let numbers;
  numbers = userInput.split(",");
  let product = 1;

  numbers.forEach(function (number) {
    product *= number;
  });
  console.log("Product is " + product);
}
function divide() {
  var userInputOne = prompt("Enter The Numerator");
  var userInputTwo = prompt("Enter Denominator");

  var quotient = (userInputTwo != 0) ? userInputOne / userInputTwo : "Can't divide by 0";
 

  console.log("Quotient is" + quotient);
}
function minAndMax() {
  var userInput = prompt("Enter The Numbers Separated By comma");
  let numbers = userInput.split(",");
  let min = numbers[0];
  let max = numbers[0];

  numbers.forEach(function (number) {
    //   Check Max
    if (number > max) {
      max = number;
    }
    // Check Min
    if (number < min) {
      min = number;
    }
  });
  console.log("Max : " + max + " and " + "Min : " + min);
}
function square() {
  var userInput = prompt("Enter a number to square");
  let result = Math.pow(userInput, 2);
  console.log("Square is : " + result);
}
function average() {
  var userInput = prompt("Enter The Numbers Separated By comma");
  let numbers = userInput.split(",");
  let sum = 0;
  let average;
  numbers.forEach(function (number) {
    sum += Number(number);
  });
  average = sum / numbers.length;
  console.log("Average is : " + average);
}
