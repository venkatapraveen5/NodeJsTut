//http server shuru karne ka

const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === './')
    {
        res.end('Welcome to our page. Thats it there is nothing else to see here move along now')
    }
    if (req.url === '/about')
    {
        res.end('My son! You are from Krypton, a dying planet, sent to planet Earth. Dont ask why we couldnt come, the writers thought it would not work if all of us are there')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>This ship does not have your mothers face because I forgot</p>
    <a href ="/">back home </a>
    `)

    /* res.write('Welcome to our page. Thats it there is nothing else to see here move along now')
    res.end() */
})

server.listen(5000)