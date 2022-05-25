const os = require('os')

//info about the current user

const user = os.userInfo()

console.log(user);

//time since the system has been on
console.log(`The System Uptime is ${os.uptime()} seconds`);

//info about the OS

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOS);