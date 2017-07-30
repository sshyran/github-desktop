const exec = require('child_process').execSync

let cmd = 'npm run release'

if (process.platform === 'linux') {
  cmd = "docker run --rm -ti -v ${PWD}:/project -v ${PWD##*/}-node-modules:/project/node_modules -v ~/.electron:/root/.electron electronuserland/electron-builder /bin/bash -c \"npm run release\""
}

const result = exec(cmd)
console.log(result)
