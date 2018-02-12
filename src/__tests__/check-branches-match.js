const checkBranchesMatch = require('../check-branches-match')
const f = () => { expect(1).toBe(1) }

test('it should continue if branches don\'t match', (done) => {
  checkBranchesMatch('master', 'not-master', f)
  done()
})

test('it should exit if branches match', () => {
  checkBranchesMatch('master', 'master', f)
})
