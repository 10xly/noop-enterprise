const POSITIVE_VALUE = require("../../lib/constants/POSITIVE_VALUE")
const NONPOSITIVE_VALUE = require("../../lib/constants/NONPOSITIVE_VALUE")
const isEqual = require("../../lib/libraries/libraries").comparisonFunctions
  .isEqual
const registerArgument = require("../../lib/utils/registerArgument")

module.exports = function isEqPositiveValue(function_argument_value01) {
  registerArgument({
    argument: function_argument_value01,
    name: "function_argument_value01",
    fn: isEqPositiveValue,
    fnName: "isEqToPositiveValue",
  })
  if (isEqual(function_argument_value01, POSITIVE_VALUE)) {
    return POSITIVE_VALUE
  } else {
    return NONPOSITIVE_VALUE
  }
}
