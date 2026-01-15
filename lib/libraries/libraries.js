module.exports = {
  classUtilities: {
    constructNewSecond: require("construct-new-second"),
  },
  comparisonFunctions: {
    isEqual: require("is-equal"),
  },
  nodeLibraries: {
    fs: require("node:fs"),
    path: require("node:path"),
  },
  cachedIntrinsics: {
    Date: require("lolite.__private.date"),
  },
}
