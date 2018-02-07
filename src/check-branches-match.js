/*
  checkBranch
  ====
  - check that the arguments are defined
  - check if the git branch matches the ci branch
*/

module.exports = (gitBranch, ciBranch) => {
  if (typeof gitBranch === 'undefined') {
    console.error(`Harmless Changes: ${gitBranch} is undefined.`)
    process.exit(1)
  } else if (typeof ciBranch === 'undefined') {
    console.error(`Harmless Changes: ${ciBranch} is undefined.`)
    process.exit(1)
  } else if (gitBranch === ciBranch) {
    console.error(`Harmless Changes: The git branch ${gitBranch} matches the ci branch ${ciBranch}. Better Test!`)
    process.exit(1)
  } else return
} 
