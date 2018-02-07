/*
  checkBranch
  ====
  - check if the ci branch is the default (in example, master)
*/

module.exports = (gitBranch, ciBranch) => {
  if (ciBranch === gitBranch) process.exit(1)
} 
