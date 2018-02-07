/*
  getChangeFiles
  ====
  - check that the arguments are defined and are Arrays
  - check if there are potentially harmful changes
*/

require('@babel/polyfill')

module.exports = (changedFilesArray, ciignoreFilesArray) => {
  if (typeof ciignoreFilesArray === 'undefined') {
    console.error(`Harmless Changes: ${ciignoreFilesArray} is undefined.`)
    process.exit(1)
  } else if (!Array.isArray(ciignoreFilesArray)) {
    console.error(`Harmless Changes: ${ciignoreFilesArray} is not an Array.`)
    process.exit(1)
  } else if (typeof changedFilesArray === 'undefined') {
    console.error(`Harmless Changes: ${changedFilesArray} is undefined.`)
    process.exit(1)
  } else if (!Array.isArray(changedFilesArray)) {
    console.error(`Harmless Changes: ${changedFilesArray} is not an Array.`)
    process.exit(1)
  }
  const potentialHarmfulChangesArray = changedFilesArray.filter(file => !ciignoreFilesArray.includes(file))
  if (potentialHarmfulChangesArray.length > 0) {
    console.warn(`Harmless Changes: there are ${potentialHarmfulChangesArray.length} potentially harmful changes. Better Test!`)
    process.exit(1)
  } else console.warn(`Harmless Changes: there are no harmful changes. Moving on!`)
}
