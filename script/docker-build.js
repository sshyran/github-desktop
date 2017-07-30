const exec = require('child_process').execSync

let cmd = 'npm install && npm run release'

if (process.platform === 'linux') {
  cmd =
    'docker run --rm -i -v ${PWD}:/project -v ${PWD##*/}-node-modules:/project/node_modules -v ~/.electron:/root/.electron electronuserland/electron-builder /bin/bash -c "sudo apt-get update && sudo apt-get install libsecret-1-dev && npm install && npm run release"'
}

console.log(`executing ${cmd}`)
const result = exec(cmd)
console.log(result)
