const exec = require('child_process').execSync

let cmd = 'npm install && npm run release'

if (process.platform === 'linux') {
  cmd =
    'docker run --rm -i -v ${PWD}:/project -v ~/.electron:/root/.electron electronuserland/electron-builder /bin/bash -c "apt-get update && apt-get install -y libsecret-1-dev && npm install -g npm@4.6.1 && npm install && npm run release"'
}

console.log(`executing ${cmd}`)
try {
  const result = exec(cmd)
  console.log(result.toString())
} catch (e) {
  console.log(e.stderr.toString())
}
