const petsjson = require('../database/pets.json');
const petsController = {
    index:(req, res)=>{
    return res.send(petsjson.pets)
    },
    show:(req, res) =>
    {
        const {id} = req.params;
        let result = petsjson.pets.filter(function (element)
        {
                        return element.id == id
        })
        return res.send(result);
    }
}

module.exports = petsController;