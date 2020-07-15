const { expect } = require('chai')

// import the calculator function from the index file
// this import requires the index file to export the calculate function
// Since module.exports is an object in index.js we use destructuring here
//  to access only the `calculate` property 
const { calculate } = require('../index')

describe('HazyCalculator takes three parameters', () => {

  /**
    This could also be written in one line as
   `expect(calculate(1, '+', 1)).to.equal(2)`
   */
  it('accepts an add operator as the second parameter to make calculations', () => {
    const result = calculate(1, '+', 1)
    expect(result).to.equal(2)
  })

  it('accepts a subtraction operator as the second parameter to make calculations', () => {
    const result =  calculate(1, '-', 1)
    expect(result).to.equal(0)
  })

  /**
    If the one line statement works for you, keep it.
    Otherwise this can be rewritten similar to the first two tests

    ```
    const result = calculate(2, '*', 4)
    expect(result).to.equal(8)
    ```
   */
  it('multiplies two numbers when the second param is an `*`', () => {
    expect(calculate(2, '*', 4)).to.equal(8)
  })

  it('adds two numbers when one is a string with a number in it', () => {
    expect(calculate('8', '+', 8)).to.equal(16)
  })

  it('subtracts numbers even when one is a string with a number in it', () => {
    expect(calculate('8', '-', 6)).to.equal(2)
  })
  it('Divides numbers even when one is a string with a number in it', () => {
    expect(calculate('4', '/', 2)).to.equal(2)
  })
  /**
   Time to learn something new
   Read more about undefined
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
   */
  it('treats undefined values as zeroes in calculations', () => {
    expect(calculate(20, '+', undefined)).to.equal(20)
  })
  
})
