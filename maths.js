const readlineSync = require('readline-sync');

// this will perform basic addition 
const addition = (num1, num2) => {
  return num1 + num2;
};

// this will perform basic subtraction
const subtraction = (num1, num2) => {
  return num1 - num2;
};

// this will perform basic multiplication
const multiplication = (num1, num2) => {
  return num1 * num2;
};

// this will perform basic division 
const division = (num1, num2) => {
  return num1 / num2;
};

// this will give you the square root of a number
const squareRoot = (num) => {
  return num * num;
};

// this will give you a number to the power of another number
const powerOf = (num1, num2) => {
  return num1 ** num2; 
};


// this allows you to export functions into other pages using the require keyword
module.exports = {
  addition: addition,
  subtraction: subtraction,
  multiplication: multiplication,
  division: division,
  squareRoot: squareRoot,
  powerOf: powerOf,
}
