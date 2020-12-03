// this allows me to import the functions from my maths file
const maths = require("./maths")

// this is a library that allows me to take user inputs
const readlineSync = require('readline-sync');


const menu = () => {
console.log('Welcome to the calculator, I am a basic calculator you can use!')
console.log('What calculation would you like to perform?')
console.log (`
    1: add 2 numbers
    2: subtract 2 numbers
    3: multiply 2 numbers
    4: divide 2 numbers
    5: square a number
    6: determine power of two numbers 
  `)
};

//menu called here! 
menu()

// this is where inputs for the numbers are taken by users - note the return is super important,
// the values won't be stored unless you use it here (no implicit). For instance, input stores
// the selection variable, need to return it after completion of input otherwise JS won't be able to 
// store this value to use in the switch statement "selections" below.
const input = () => {
  
  console.log('Please select from numbers 1-6:')
    const selection = parseInt(readlineSync.question('> '));
  
  if (selection != 5) {
    console.log("Enter number 1")
      const num1 = parseInt(readlineSync.question('> '));
    console.log("Enter number 2")
      const num2 = parseInt(readlineSync.question('> '));
    return {
      input: selection,
      num1: num1,
      num2: num2
    }
  } else { 
    console.log("Enter number you'd like to square")
      const num1 = parseInt(readlineSync.question('> '));
      return {
        input: selection,
        num1: num1
      }
  }
}

// defining variable that stores the value of inputs grabbed above in inputs, note by typing out selections = input here, this causes JS to actually call the inputs function
// as if you look elsewhere in the file, it is not called elsewhere. 
const selections = input()

switch (selections.input) {
  case 1:
    const addedNum = console.log(maths.addition(selections.num1, selections.num2));
    break;
  case 2:
    console.log(maths.subtraction(selections.num1, selections.num2));
    break;
  case 3:
    console.log(maths.multiplication(selections.num1, selections.num2));
    break;
  case 4:
    console.log(maths.division(selections.num1, selections.num2));
    break;
  case 5: 
    console.log(maths.squareRoot(selections.num1));
    break;
  case 6: 
    console.log(maths.powerOf(selections.num1, selections.num2));
    break;
  default:
    console.log('Please select one of the provided options');
}


