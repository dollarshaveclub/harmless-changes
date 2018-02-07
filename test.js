const exec = require('child_process').exec

test('it should exit', (done) => {
  exec('CIBRANCH=master node ./index.js', (err, text, stderr) => {
    console.log('TEST: ', err, text, stderr)
    done()
  })
})

