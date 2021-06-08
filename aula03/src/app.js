// modulo nativo
const fs = require('fs')
// modulo importado de terceiros
let moment = require('moment')
// modulo criado no projeto 

const superHerois = require('../superHerois')
//metdo do fs
let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf-8' );
let data = moment().format('MMM do YY')
console.log(superHerois)


