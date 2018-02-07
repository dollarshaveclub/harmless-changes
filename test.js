const exec = require('child_process').exec

test('it should exit', (done) => {
  exec('CIBRANCH=master node ./index.js', (err, text, stderr) => {
    done()
  })
})

