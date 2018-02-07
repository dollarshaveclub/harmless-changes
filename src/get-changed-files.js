/*
  getChangeFiles
  ====

*/

require('babel-polyfill')

module.exports = (changedFilesArray, ciignoreFilesArray) => {
  const potentialHarmfulChangesArray = changedFilesArray.filter(file => !ciignoreFilesArray.includes(file))
  if (potentialHarmfulChangesArray.length) process.exit(1)
}
