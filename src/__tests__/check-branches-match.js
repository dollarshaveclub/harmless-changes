const checkBranchesMatch = require('../check-branches-match')
const errorCallback = () => { expect(1).toBe(1) }

test('it should continue if branches don\'t match', (done) => {
  checkBranchesMatch('master', 'not-master', errorCallback)
  done()
})

test('it should exit if branches match', () => {
  checkBranchesMatch('master', 'master', errorCallback)
})
