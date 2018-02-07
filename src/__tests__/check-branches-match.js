const assert = require('assert')

const checkBranchesMatch = require('../check-branches-match')

test('it should continue if branches dont match', (done) => {
  const branch = 'master'
  const ciBranch = 'not-master'
  checkBranchesMatch(branch, ciBranch)
  done()
})

// test('it should exit if branches match', () => {
//   const branch = 'master'
//   const ciBranch = 'master'
//   checkBranchesMatch(branch, ciBranch)
// })
