const express = require('express')
const app = express()
const rotasProdutos = require('./routes/produtos')

app.get('/', (req, res) => res.send("Ola mundo"))
app.get('/contatos', (req, res) =>
{
    res.send("Página de contatos")
})
app.use("/produtos", rotasProdutos);
app.use("/pets")

// criando um servidor
app.listen(3000, () =>
{
     console.log("Servidor rodando na porta 3000.")
})


/*
const series = [{id: 1, nome: 'aaaaaaa'}, {id:2, nome: 'bbbbbbb'}];
app.get('/serie/:id', (req, res) => {
    let idSerie = req.params.id;
    for(let retornaSerie of series)
    {
        if (retornaSerie.id == idSerie)
        {            
            res.send(retornaSerie)
        }
    }
})*/
//console.log(app)


/*


*/




