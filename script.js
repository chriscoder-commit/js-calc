const maths = require("./maths")

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

menu()
console.log(maths.addition(3, 2))




