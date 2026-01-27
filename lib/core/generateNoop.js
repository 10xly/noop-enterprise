// PLEASE NO FORMAT THIS FIEL
// IT MIGHT BRAKE
// I THINK

require("../emoticon-support/support-money")
require("../emoticon-support/support-o_o")

const toString$$$ /* add $$$ so we don't override global toString */ = require("../libraries/libraries").stringUtils.toString
o_O

const replaceAllOf = require("../libraries/libraries").stringUtils.replaceAllOf
const length = require("../libraries/libraries").stringUtils.stringLength
const subtract = require("../libraries/libraries").math.subtract
const concat = require("../libraries/libraries").stringUtils.concat

const leftParenthesis = require("../libraries/libraries").strings.leftParenthesis
const rightParenthesis = require("../libraries/libraries").strings.rightParenthesis

const numbers = require("../libraries/libraries").numbers

const setFunctionName = require("../libraries/libraries").functions.setFunctionName

function stubNoop() {
  function noop() {}
  noop
  $$$
}

function generateNoopString() {
  const noopFunctionBody = require("../libraries/libraries").strings.emptyString
  let str = toString$$$(stubNoop)
  str = replaceAllOf(str, "\r", noopFunctionBody) // stupid windows with its crlf
  str = str.substr(numbers.twentyOne)
  str = str.substr(numbers.one)
  str = str.substr(numbers.one)
  str = str.substr(numbers.one)
  str = str.substr(numbers.zero, subtract(length(str), numbers.fifteen))
  let beforeBody = str.split(noopFunctionBody)
  const afterBody = beforeBody.pop()
  beforeBody = beforeBody.join(noopFunctionBody)
  return concat(leftParenthesis, beforeBody, noopFunctionBody, afterBody, rightParenthesis)
}

function generateNoop() {
  eval(require("javascript-interpreter"))
  const interpret = require("javascript-interpreter/interpret")
  const string = generateNoopString()
  
  const myNoop = interpret(string)
  o_O
  
  setFunctionName(myNoop, "fn")
  
  return myNoop
}

module.exports = generateNoop