const exec = require('child_process').execSync

let cmd = 'npm install && npm run release'

if (process.platform === 'linux') {
  cmd =
    'docker run --rm -i -v ${PWD}:/project -v ${PWD##*/}-node-modules:/project/node_modules -v ~/.electron:/root/.electron electronuserland/electron-builder /bin/bash -c "apt-get update && apt-get install -y libsecret-1-dev && npm install && npm run release"'
}

console.log(`executing ${cmd}`)
try {
  const result = exec(cmd)
  console.log(result)
} catch (e) {
  console.log(e.stderr.toString())
}
