function calculate(numberOne, operation, numberTwo) {
  // Calculation Rules:
  // The `calculate` function runs an arithmetic calculation based upon inputs (eg. `2, '*', 10`)
  // The second parameter allows is an operand (`+`, `-`, `*`, `/`)

  // *We support inputs in the following ways:
  // - Stringified numbers (eg. `'2'`) should be treated as numbers
  // - `undefined` values should be treated as a 0

// In these if statements we are making sure that an undefined value will be read as 0.
// We use the typeof operator to do this. The typeof operator returns a string indicating the type of the unevaluated operand.
// EX. console.log(typeof 42);
// expected output would be: "number"

// For more about data types and the typeof operator go to: https://www.w3schools.com/js/js_datatypes.asp
  if (typeof numberOne === 'undefined') {
    numberOne = 0 
  }
  if (typeof numberTwo === 'undefined') {
    numberTwo = 0
  }

  // Based on the rules we need stringified numbers to be recognized as integers and not strings 
  // so to turn our string into an intiger we use the parseInt function.

  // The 'switch' statement is used to perform different actions based on different conditions. 
  // Each case is a different conditon that if the equation given matches one it will be ran through
  switch (operation) {
    case '+':
      return parseInt(numberOne) + parseInt(numberTwo)
    case '-':
      return parseInt(numberOne) - parseInt(numberTwo)
    case '*': 
      return parseInt(numberOne) * parseInt(numberTwo)
    case '/': 
      return parseInt(numberOne) / parseInt(numberTwo)
    default:
      return 'Operation not yet supported. You sent ' + operation
  }
}

/**
 Export an object with two properties.
 One property is `calculate`. The value will be the calculate function.
 The other property is `features` which contains a string value with a description.
 */
module.exports = {
  calculate,
  // Here we want our features to reference each of our math symbols that we intend to use.
  features: ('+', '-', '*', '/')
}
