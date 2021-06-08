//-------------Desafio

//Instruções: Baixe o arquivo da que o professor irá te passar. 

/*
Desafio1 : Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomePets" que exiba no terminal o NOME de todos os pets. 
(utilizar o foreach)

Desafio2: Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomeDonoPets" que exiba no terminal o NOMEDONO de todos os pets.  (Usar for of)

Desafio3: Utilizando o Array de Pets disponibilizado, criar uma função "ListarTipo" que irá receber um parâmetro com o tipo e retornar todos os pets desse tipo. (Usar o Filter)

Desafio4: Utilizando o Array de Pets disponibilizado, criar uma função "DataDeCadastro". Essa função deve retornar um array onde será adicionado a data de hoje em todos os objetos. O nome da nova propreie e dade deve ser "DataCadastro". (Usar Object Date e MAP)

Desafio5: Utilizando o Array de Pets disponibilizado, criar uma função "ListaDadosPet" que irá receber como parâmetro um objeto. Essa função deve exibir os dados de um pet. (usar Desestruturação de objetos)



*/
let pets = [
    {
      nome: 'Yoshi',
      nomeDono: 'Victor',
      idade: 7,
      tipo: 'Cachorro',
      raca: 'Akita Inu',
      peso: 40,
      genero: 'Macho',
      cor: 'ruivo',
      vacinado: true
    },
    {
      nome: 'Pituco',
      nomeDono: 'Victor',
      idade: 2,
      tipo: 'ave',
      raca: 'Calopsita',
      peso: 0.5,
      genero: 'Macho',
      cor: 'cinza',
      vacinado: true
    },
    {
      nome: 'Pitty',
      nomeDono: 'Rose',
      idade: 2,
      tipo: 'ave',
      raca: 'Agapornis',
      peso: 0.5,
      genero: 'Fêmea',
      cor: 'verde',
      vacinado: true
    },
    {
        nome: 'Bixano',
        nomeDono: 'Rose',
        idade: 10,
        tipo: 'Cachorro',
        raca: 'PastorAlemão',
        peso: 0.5,
        genero: 'Fêmea',
        cor: 'Amarelo',
        vacinado: true
      },
  ]


// Desafio1 : Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomePets" que exiba no terminal o NOME de todos os pets. 
// (utilizar o foreach)
/*
pets.forEach( function (ListarNomePets)
{
 // console.log(ListarNomePets.nome)
})*/


//Desafio2: Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomeDonoPets" que exiba no terminal o NOMEDONO de todos os pets.  (Usar for of)
/*let ListarNomeDonoPets = (pets) =>
{
  for(let litarNomeDonoPets of pets)
  {
    console.log(litarNomeDonoPets.nomeDono)

  }
}
ListarNomeDonoPets(pets)*/

//Desafio3: Utilizando o Array de Pets disponibilizado, criar uma função "ListarTipo" que irá receber 
//um parâmetro com o tipo e retornar todos os pets desse tipo. (Usar o Filter)
//function ListarTipo()
/*
let ListarTipo = (pets) =>
{
  console.log(pets.filter(function(pet){
    return pet.tipo == 'Cachorro'
  }))
}
ListarTipo(pets)
*/
//Desafio4: Utilizando o Array de Pets disponibilizado, criar uma função "DataDeCadastro". 
//Essa função deve retornar um array onde será adicionado a data de hoje em todos os objetos. 
//O nome da nova propreie e dade deve ser "DataCadastro". (Usar Object Date e MAP)
/*
let DataDeCadastro = (pets) =>
{
  var dataAtual = new Date(2021,05,26);
  let novoPet = pets.map(function(pet)
  {
    pet.DataDeCadastro = dataAtual    
    return console.log(pet)
  })
}
DataDeCadastro(pets)
*/

//Desafio5: Utilizando o Array de Pets disponibilizado, criar uma função "ListaDadosPet" que irá 
//receber como parâmetro um objeto. Essa função deve exibir os dados de um pet.
// (usar Desestruturação de objetos)
let listaDadosPet = (pets) =>
{

}


const listarDadosPet = (Array, callback) => {
  for(const pet of array)
  {
    listarDadosPet(pet)
  }
}
listarDadosPet(pets, listarDadosPet)