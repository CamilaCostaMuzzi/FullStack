/*const moment = require('moment')
var dataIni = moment('2020-05-15')
var dataFim =  moment('2021-05-15')


var quantidadDeDias = dataFim.diff(dataIni, 'days')
var quantidadDeDiasMeses = dataFim.diff(dataIni, 'months')
console.log(quantidadDeDias)
console.log(quantidadDeDiasMeses)*/

/*
const {differenceInDays} = require('date-fns')
var dataIni = new Date('2020, 05, 15')
var dataFim =  new Date('2021, 05, 15')
var quantidadDeDias = differenceInDays(dataFim, dataIni)
console.log(quantidadDeDias)*/

const {differenceInMonths} = require('date-fns')
var dataIni = new Date('2020, 05, 15')
var dataFim =  new Date('2021, 05, 15')
var quantidadDeMes = differenceInMonths(dataFim, dataIni)
console.log(quantidadDeMes)
