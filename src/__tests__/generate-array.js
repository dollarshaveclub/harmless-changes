const assert = require('assert')

const generateArray = require('../generate-array') 

test('it should create an array', () => {
  generateArray('cat .ciignore_test', (arr) => {
    const arrTest = arr
    expect(typeof arrTest === Array)
  })
})

test('it should create an array', (done) => {
  const stub = (test) => test 
  generateArray('cat .no_file', stub)
  done()
})
