const fs = require("../../lib/libraries/libraries").nodeLibraries.fs
const path = require("../../lib/libraries/libraries").nodeLibraries.path
const NEWLINE = require("../../lib/libraries/libraries").strings.newlineCharacter
const construct = require("../../lib/libraries/libraries").classUtilities.constructNewSecond
const stringify = require("../../lib/libraries/libraries").objectUtilities.stringify
const REGISTERED_ARGUMENTS_LOG_FILE_PATH = require("../constants/REGISTERED_ARGUMENTS_LOG_FILE_PATH")
const POSITIVE_VALUE = require("../constants/POSITIVE_VALUE")
const getDirname = require("../libraries/libraries").pathUtils.getDirname
const Date = require("../../lib/libraries/libraries").cachedIntrinsics.Date

module.exports = function registerArgument(function_argument_value01) {
  // we cannot register the argument function_argument_value01 because this is the registerArgument function
  fs.appendFileSync(
    path.join(getDirname(), REGISTERED_ARGUMENTS_LOG_FILE_PATH),
    `${NEWLINE}${construct(Date)} Registered argument: ${stringify(
      function_argument_value01
    )}${NEWLINE}`
  )

  return POSITIVE_VALUE
}
