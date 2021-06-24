const http = require('http')
http.createServer(function(req, res)
{
    // valida caracter especial text/html; charset=utf-8
    res.writeHead(200, {"Content-type":"text/html; charset=utf-8"})
    switch(req.url)
    {
        case "/":
            res.end("Você está na página home!")
            break;
        case "/contato":
            res.end("Você está na pagina contato")
            break;
            default:
                res.end("voce esta no nosso servidor")
    }


}).listen(2030, "localHost")
