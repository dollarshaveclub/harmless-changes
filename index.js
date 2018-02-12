const generateArray = require('./src/generate-array')
const checkBranchesMatch = require('./src/check-branches-match')
const checkForHarmfulChanges = require('./src/check-for-harmful-changes')

const ciIgnoreFile = process.env.CIIGNOREFILE || '.ciignore'
const gitBranch = process.env.GITBRANCH || 'master'
const ciBranch = process.env.CIBRANCH
// the exit stub makes testing WAY easier
const exitStub = () => process.env.EXITSTUB || process.exit(1)

async function HarmlessChanges() {
  const ciignoreArr =  await generateArray(
    `cat ${ciIgnoreFile}`, exitStub)
  const gitChangesArr = await generateArray(
    `git diff-tree --no-commit-id --name-only -r origin/${gitBranch}..HEAD`, exitStub)
  checkBranchesMatch(gitBranch, ciBranch, exitStub)
  checkForHarmfulChanges(gitChangesArr, ciignoreArr, exitStub)
}

