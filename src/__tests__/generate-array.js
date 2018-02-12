const generateArray = require('../generate-array')
let fail
const exitStub = () => fail = '😔'

test('it should create an array', async function() {
  const result = await generateArray('cat .ciignore', exitStub)
  expect(result instanceof Array)
})

test('it should exit', async function() {
  const result = await generateArray('cat .no_real_file', exitStub)
  expect(fail).toBe('😔')
})
