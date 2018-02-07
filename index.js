const generateArray = require('./src/generate-array')
const checkBranchesMatch = require('./src/check-branches-match')
const checkForHarmfulChanges = require('./src/check-for-harmful-changes')

const branch = 'master'
const ciBranch = 'not-master'

generateArray('cat .ciignore', (arr) => {
  const ciignoreArr = arr
  generateArray(`git diff-tree --no-commit-id --name-only -r origin/${branch}..HEAD`, (arr) => {
    const gitChangesArr = arr 
    // console.log(ciignoreArr, gitChangesArr)
    checkBranchesMatch(branch, ciBranch)
    checkForHarmfulChanges(gitChangesArr, ciignoreArr)
  })
})
