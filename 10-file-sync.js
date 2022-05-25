
const {readFileSync, writeFileSync} = require('fs')

first = readFileSync('./content/first.txt', 'utf8')
second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/write-sync.txt',
    `Here is the appended result: ${first}, ${second}`,
    {flag: 'a'}
)