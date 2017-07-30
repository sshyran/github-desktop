const exec = require('child_process').exec

let cmd = 'npm run release'

if (process.platform === 'linux') {
  cmd = "docker run --rm -ti -v ${PWD}:/project -v ${PWD##*/}-node-modules:/project/node_modules -v ~/.electron:/root/.electron electronuserland/electron-builder /bin/bash -c \"npm run release\""
}

exec(cmd, [], (error, stdout, stderr) => {
  if (error) {
    console.error('stderr', stderr)
    throw error
  }
  console.log('stdout', stdout)
})
