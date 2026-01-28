module.exports = {
  classUtilities: {
    constructNewSecond: require("construct-new-second"),
  },
  comparisonFunctions: {
    isEqual: require("is-equal"),
  },
  math: {
    subtract: require("subtract"),
  },
  nodeLibraries: {
    fs: require("node:fs"),
    path: require("node:path"),
  },
  cachedIntrinsics: {
    Date: require("lolite.__private.date"),
  },
  strings: {
    newlineCharacter: require("fizzbuzz-enterprise/source/main/constants/strings/delimiters/Newline"),
    emptyString: require("empty-string"),
    leftParenthesis: require("@characters/left-parenthesis").default,
    rightParenthesis: require("@characters/right-parenthesis").default,
  },
  objectUtilities: {
    stringify: require("json-stringify-safe"),
  },
  negation: {
    not: require("es-logical-not-operator"),
  },
  errors: {
    throwErrorWithMessage: require("immediate-error"),
  },
  pathUtils: {
    getDirname: require("path-__dirname"),
  },
  stringUtils: {
    toString: require("@rightpad/convert2string"),
    replaceAllOf: require("str-replaceallof-es"),
    stringLength: require("utf8-byte-length"),
    concat: require("@rightpad/concat"),
  },
  global: {
    globalObject: require("@10xly/global"),
  },
  numbers: {
    zero: require("integer-value-positive-zero")(),
    one: require("@positive-numbers/one"),
    fifteen: require("@positive-numbers/fifteen"),
    twentyOne: require("@positive-numbers/twenty-one"),
  },
  functions: {
    setFunctionName: require("set-function-name"),
  },
  booleans: {
    booleanPro: require("boolean-pro"),
  },
}
