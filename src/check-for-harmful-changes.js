/*
  getChangeFiles
  ====
  - check that the arguments are defined and are Arrays
  - check if there are potentially harmful changes
*/
const minimatch = require('minimatch')

module.exports = (changedFilesArray, ciignoreFilesArray, exitStub) => {
  try {
    ciignoreFilesArray.forEach((pattern) => {
      const match = changedFilesArray.find(file => minimatch(file, pattern, { matchBase: true }))
      if (match) {
        console.warn(`Harmless Changes: there are ${potentialHarmfulChangesArray.length} potentially harmful changes. Better Test!`)
        return exitStub()
      }
      return console.warn(`Harmless Changes: there are no harmful changes. Moving on!`)
    })
  } catch(err) {
    console.error(`Harmless Changes: ${err}`)
    return exitStub()
  }
}
