const generateArray = require('../generate-array')
const exitStub = () => '😔'

test('it should create an array', async function test () {
  const result = await generateArray('cat .ciignore', exitStub)
  expect(result instanceof Array)
})

test('it should exit', async function test () {
  const result = await generateArray('cat .no_real_file', exitStub)
  expect(result).toBe('😔')
})
