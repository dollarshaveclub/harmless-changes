const exec = require('child_process').exec

module.exports = (command, callback) => {
  exec(command, (err, text, stderr) => {
    if (err) {
      console.error(`Harmless Changes: error when reading ${command}. See logs below.`)
      console.error(err.stack)
      console.error(text.toString())
      console.error(stderr.toString())
      process.exit(1)
    } else {
      // convert .ciignore to Array
      const arr = text.split(/\n/)
      // remove extra item
      arr.pop()
      callback(arr)
    }
  })
}
