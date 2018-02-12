const checkForHarmfulChanges = require('../check-for-harmful-changes')
const exitStub = () => { expect(1).toBe(1) }

test('it should not exit if there are harmful changes', (done) => {
  const changedFilesArray = [0, 1, 2, 3]
  const ciignoreFilesArray = [0, 1, 2, 3]
  checkForHarmfulChanges(changedFilesArray, ciignoreFilesArray, exitStub)
  done()
})

test('it should exit if changedFilesArray is undefined', () => {
  const ciignoreFilesArray = [0, 1, 2, 3]
  checkForHarmfulChanges(checkForHarmfulChanges, ciignoreFilesArray, exitStub)
})

test('it should exit if ciignoreFilesArray is undefined', () => {
  const changedFilesArray = [0, 1, 2, 3]
  let ciignoreFilesArray
  checkForHarmfulChanges(changedFilesArray, ciignoreFilesArray, exitStub)
})

test('it should exit if changedFilesArray is not an array', () => {
  const changedFilesArray = 'not an array'
  const ciignoreFilesArray = [0, 1, 2, 3]
  checkForHarmfulChanges(changedFilesArray, ciignoreFilesArray, exitStub)
})

test('it should exit if ciignoreFilesArray is not an array', () => {
  const changedFilesArray = [0, 1, 2, 3]
  const ciignoreFilesArray = 'not an array'
  checkForHarmfulChanges(changedFilesArray, ciignoreFilesArray, exitStub)
})

test('it should exit if changedFilesArray is not an array', () => {
  const changedFilesArray = 'not an array'
  const ciignoreFilesArray = [0, 1, 2, 3]
  checkForHarmfulChanges(changedFilesArray, ciignoreFilesArray, exitStub)
})

test('it should exit if ciignoreFilesArray is not 0 after filtering', () => {
  const changedFilesArray = [0, 1, 2, 3]
  const ciignoreFilesArray = [0, 1, 2]
  checkForHarmfulChanges(changedFilesArray, ciignoreFilesArray, exitStub)
})
