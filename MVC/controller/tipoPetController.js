const petsjson = require('../database/pets.json');
const petsController = {
    
    show:(req, res) =>
    {
        const {tipo} = req.params;
        let result = petsjson.pets.filter(function (element)
        {
            return element.tipo == tipo
        })
        return res.send(result);
    }
}

module.exports = petsController;