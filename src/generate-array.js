const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = async function(cmd, exitStub) {
  try {
    const { stdout } = await exec(cmd)
    // convert .ciignore to Array
    const arr = stdout.split(/\n/)
    // remove extra item
    arr.pop()
    return arr
  } catch(e) {
    console.error(`Harmless Changes: error when reading ${cmd}.`)
    return exitStub()
  }
}
