/*
  checkBranch
  ====
  - check that the arguments are defined
  - check if the git branch matches the ci branch
*/

module.exports = (gitBranch, ciBranch, errorCallback) => {
  if (typeof gitBranch === 'undefined') {
    console.error(`Harmless Changes: ${gitBranch} is undefined.`)
    return errorCallback()
  } else if (typeof ciBranch === 'undefined') {
    console.error(`Harmless Changes: ${ciBranch} is undefined.`)
    return errorCallback()
  } else if (gitBranch === ciBranch) {
    console.error(`Harmless Changes: The git branch ${gitBranch} matches the ci branch ${ciBranch}. Better Test!`)
    return errorCallback()
  } else return console.warn(`Harmless Changes: The git branch ${gitBranch} does not match the ci branch ${ciBranch}. Moving on!`)
}
