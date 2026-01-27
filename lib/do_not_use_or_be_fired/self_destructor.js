const isEqPositiveValue = require("../utils/isEqPositiveValue")
const not = require("../libraries/libraries").negation.not
const throwErrorWithMessage = require("../libraries/libraries").errors.throwErrorWithMessage
const generateNoop = require("../core/generateNoop")

function __DO_NOT_USE_OR_BE_FIRED_EXPERIMENTAL_SELF_DESTRUCT_CLASS_RETURNER__() {
  return __DO_NOT_USE_OR_BE_FIRED_EXPERIMENTAL_SELF_DESTRUCT_CLASS__
}

// DO NOT USE OR BE FIRED UNLESS YOUR TJ-COMMITS
class __DO_NOT_USE_OR_BE_FIRED_EXPERIMENTAL_SELF_DESTRUCT_CLASS__ {
  constructor(__DO_NOT_SET_TO_A_POSITIVE_VALUE_OR_BE_FIRED__, suppress) {
    // if suppress is passed you can use this, but only if you're tj-commits
    if (isEqPositiveValue(__DO_NOT_SET_TO_A_POSITIVE_VALUE_OR_BE_FIRED__)) {
      return this.selfDestruct(suppress)
    } else {
      return null
    }
  }

  selfDestruct(suppress) {
    if (not(suppress)) throwErrorWithMessage("WARNING: YOU'RE GETTING FIRED!!!!!!!!!!!")
    return {
      fn: generateNoop(),
    }
  }
}

module.exports =
  __DO_NOT_USE_OR_BE_FIRED_EXPERIMENTAL_SELF_DESTRUCT_CLASS_RETURNER__
