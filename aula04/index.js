// DESAFIO 1
// CRIAR 3 VARIAVEIS (NOME, IDADE, EMAIORDEIDADE)
// COLOCAR CARACTERISTICAS

let nome = 'Camila Muzzi'
let idade = 32
let eMaiorDeIdade = true

//DESAFIO 2
//CRIAR UMA VARIAVEL DO TIPO OBJETO QUE CONTER 3 PROPRIEDADES
// PROPRIEDADES: NOME. IDADE, EMAIORDEIDADE

let pessoa = {
    nome: nome,
    idade: idade,
    eMaiorDeIdade: eMaiorDeIdade
}
console.log(pessoa.nome)

let animais = ['cachorro', 'passaro', 'peixe', 'gato']
console.log(animais)

let numero1 = 25
let numero2 = 15
let resultadoSoma = numero1 + numero2
console.log(resultadoSoma)

if(numero1 > numero2)
{
    console.log("O " + numero1 + " e maior que " + numero2)
}