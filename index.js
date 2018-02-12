const generateArray = require('./src/generate-array')
const checkBranchesMatch = require('./src/check-branches-match')
const checkForHarmfulChanges = require('./src/check-for-harmful-changes')

const ciIgnoreFile = process.env.CIIGNOREFILE || '.ciignore'
const gitBranch = process.env.GITBRANCH || 'master'
const ciBranch = process.env.CIBRANCH

const exitStub = () => process.exit(1)

generateArray(`cat ${ciIgnoreFile}`, (arr) => {
  const ciignoreArr = arr
  generateArray(`git diff-tree --no-commit-id --name-only -r origin/${gitBranch}..HEAD`, (arr) => {
    const gitChangesArr = arr
    checkBranchesMatch(gitBranch, ciBranch, exitStub)
    checkForHarmfulChanges(gitChangesArr, ciignoreArr, exitStub)
  })
})

