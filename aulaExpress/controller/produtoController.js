// variavel que ira receber um objeto literal. Dentro do objeto vamos definir 
//metodos que serão responsaveis por manipular cada pedido em particular
const controlador = { 
    index:(req, res) =>{
        res.send('Index de produtos')
    },
};


module.exports = controlador;