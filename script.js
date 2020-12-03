console.log('Welcome to the calculator, I am a basic calculator you can use!')
console.log('What calculation would you like to perform?')


// this will perform basic addition 
const addition = (num1, num2) => {
  return num1 + num2;
};

console.log(addition(3, 4))

// this will perform basic subtraction
const subtraction = (num1, num2) => {
  return num1 - num2;
};

console.log(subtraction(100, 68))

// this will perform basic multiplication
const multiplication = (num1, num2) => {
  return num1 * num2;
};

console.log(multiplication(4, 5))

// this will perform basic division 
const division = (num1, num2) => {
  return num1 / num2;
};

console.log(division(20, 5));

// this will give you the square root of a number
const squareRoot = (num) => {
  return num * num;
};

console.log(squareRoot(5))

// this will give you a number to the power of another number
const powerOf = (num1, num2) => {
  return num1 ** num2; 
};

console.log(powerOf(3, 4))


