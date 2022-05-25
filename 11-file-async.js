//once we start this task, the process is offloaded to a different thread (?) and we continue with a different task

const { secureHeapUsed } = require('crypto');
const {readFile, writeFile, read} = require('fs')

readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err)
    {
        console.log(err)
        return;
    }
    const first = res
    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err)
        {
            console.log(err);
            return;
        }
        const second = res
        writeFile(
            './content/write-async.txt',
            `Here is the appended result: ${first}, ${second}`,
            {flag: 'a'},
            (err,res)=> {
                if (err)
                {
                    console.log(err);
                    return
                }
                console.log(res);
            } )
        //second is local to that readFile
    })
        
})


