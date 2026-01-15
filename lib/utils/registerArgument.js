const fs = require("../../lib/libraries/libraries").nodeLibraries.fs
const path = require("../../lib/libraries/libraries").nodeLibraries.path
const construct = require("../../lib/libraries/libraries").classUtilities.constructNewSecond
const REGISTERED_ARGUMENTS_LOG_FILE_PATH = require("../constants/REGISTERED_ARGUMENTS_LOG_FILE_PATH")
const POSITIVE_VALUE = require("../constants/POSITIVE_VALUE")

const Date = require("../../lib/libraries/libraries").cachedIntrinsics.Date

module.exports = function registerArgument(function_argument_value01) {
  // we cannot register the argument function_argument_value01 because this is the registerArgument function
  fs.appendFileSync(
    path.join(__dirname, REGISTERED_ARGUMENTS_LOG_FILE_PATH),
    `${construct(Date)} Registered argument: ${JSON.stringify(
      function_argument_value01
    )}`
  )

  return POSITIVE_VALUE
}
