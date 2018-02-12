/*
  getChangeFiles
  ====
  - check that the arguments are defined and are Arrays
  - check if there are potentially harmful changes
*/

module.exports = (changedFilesArray, ciignoreFilesArray, exitStub) => {
  if (typeof ciignoreFilesArray === 'undefined') {
    console.error(`Harmless Changes: ${ciignoreFilesArray} is undefined.`)
    return exitStub()
  } else if (!Array.isArray(ciignoreFilesArray)) {
    console.error(`Harmless Changes: ${ciignoreFilesArray} is not an Array.`)
    return exitStub()
  } else if (typeof changedFilesArray === 'undefined') {
    console.error(`Harmless Changes: ${changedFilesArray} is undefined.`)
    return exitStub()
  } else if (!Array.isArray(changedFilesArray)) {
    console.error(`Harmless Changes: ${changedFilesArray} is not an Array.`)
    return exitStub()
  }
  const potentialHarmfulChangesArray = changedFilesArray.filter(file => !ciignoreFilesArray.includes(file))
  if (potentialHarmfulChangesArray.length > 0) {
    console.warn(`Harmless Changes: there are ${potentialHarmfulChangesArray.length} potentially harmful changes. Better Test!`)
    return exitStub()
  } else return console.warn(`Harmless Changes: there are no harmful changes. Moving on!`)
}
