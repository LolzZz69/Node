const os = require('os');

let userInfo = os.userInfo()
console.log(userInfo);

console.log(`The uptime is ${os.uptime()} seconds`);


const user = {
    name: os.type(),
    freemem: os.freemem(),
    release: os.release(),
    version: os.version(),
}

console.log(user)