/*
  getChangeFiles
  ====
  - check that the arguments are defined and are Arrays
  - check if there are potentially harmful changes
*/

require('@babel/polyfill')

module.exports = (changedFilesArray, ciignoreFilesArray, errorCallback) => {
  if (typeof ciignoreFilesArray === 'undefined') {
    console.error(`Harmless Changes: ${ciignoreFilesArray} is undefined.`)
    return errorCallback()
  } else if (!Array.isArray(ciignoreFilesArray)) {
    console.error(`Harmless Changes: ${ciignoreFilesArray} is not an Array.`)
    return errorCallback()
  } else if (typeof changedFilesArray === 'undefined') {
    console.error(`Harmless Changes: ${changedFilesArray} is undefined.`)
    errorCallback()
  } else if (!Array.isArray(changedFilesArray)) {
    console.error(`Harmless Changes: ${changedFilesArray} is not an Array.`)
    return errorCallback()
  }
  const potentialHarmfulChangesArray = changedFilesArray.filter(file => !ciignoreFilesArray.includes(file))
  if (potentialHarmfulChangesArray.length > 0) {
    console.warn(`Harmless Changes: there are ${potentialHarmfulChangesArray.length} potentially harmful changes. Better Test!`)
    return errorCallback()
  } else return console.warn(`Harmless Changes: there are no harmful changes. Moving on!`)
}
