const isEqPositiveValue = require("../utils/isEqPositiveValue")

function __DO_NOT_USE_OR_BE_FIRED_EXPERIMENTAL_SELF_DESTRUCT_CLASS_RETURNER__() {
  return __DO_NOT_USE_OR_BE_FIRED_EXPERIMENTAL_SELF_DESTRUCT_CLASS__
}

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
    if (!suppress) console.warn("WARNING: YOU'RE GETTING FIRED!!!!!!!!!!!")
    return {
      fn() {},
    }
  }
}

module.exports =
  __DO_NOT_USE_OR_BE_FIRED_EXPERIMENTAL_SELF_DESTRUCT_CLASS_RETURNER__
