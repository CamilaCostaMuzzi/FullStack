// criar minimo produto viavel = mvp
//Sistema de petshop:
// - cadastrar animais(validar)
// - vacinar
// - listar os pets
// - contar quantos pets vacinados

// array de objetos
let pets = [
    {// indice 0
        nome: 'bob',
        nomeDono: 'Arthur',
        idade: '5',
        tipo: 'cachorro',
        raca: 'Akita Inu',
        peso: 40,
        genero: 'Macho',
        cor: 'Ruivo',
        vacinado: true
    },
    {// indice 1
        nome: 'Lup',
        nomeDono: 'Laura',
        idade: '2',
        tipo: 'cachorro',
        raca: 'vira lata',
        peso: 40,
        genero: 'Macho',
        cor: 'preto',
        vacinado: true
    },
    {//indice 2
        nome: 'mab',
        nomeDono: 'Luiza',
        idade: '1',
        tipo: 'cachorro',
        raca: 'pincher',
        peso: 8,
        genero: 'femea',
        cor: 'branco',
        vacinado: false
    }
]
// Criar uma função para listar os pets do array pets
//arrow function
/*
let listarPets = () =>
{
    pets.forEach(pet => {
        console.log('Nome:' + pet.nome + ' Tipo: ' + pet.tipo)
    })
}
*/
const listarPets = () =>
{
    for (let i = 0; i < pets.length; i++)
    {
        console.log("Nome: " + pets[i].nome + " Tipo: " + pets[i].tipo )
    }
}
//listarPets()

// criar função cadastrar pets
/*
function cadastrarPet(arrayPets, objetoPet)
{
 return arrayPets.push(objetoPet)
}*/
/* certo

function cadastrarPet(arrayPets, objetoPet){
    if(typeof objetoPet == "object"){
      if(validaDados(objetoPet)){
        arrayPets.push(objetoPet)
        console.log(pets)
      } else {
        console.log('O objeto não tem todas as propriedades necessárias informadas')
      }
    } else {
      console.log('Insira um objeto válido')
    }
  }*/


let cadastrarPet = (arrayPets, objetoPet) =>
{    
    if(validarDados(novoPet))
        return arrayPets.push(objetoPet)
    else
        return console.log('Insira um objeto valido.')   
}


let novoPet = {
        nome: 'Thor',
        nomeDono: 'Pablo',
        idade: '1',
        tipo: 'cachorro',
        raca: 'pincher',
        peso: 8,
        genero: 'macho',
        cor: 'branco',
        vacinado: false
}
//cadastrarPet(pets, novoPet)
//listarPets()

// criar funcao para validar se o objeto passado para a funcao cadastrarPet possui as propriedades necessarias
//

// const pois e uma uma funcao que so validat
const validarDados = (objetoPet) =>
{
    if(typeof objetoPet == "object")
    {
        return (objetoPet.nome && objetoPet.nomeDono && objetoPet.idade && objetoPet.tipo && objetoPet.raca && objetoPet.genero && 
            objetoPet.cor && objetoPet.vacinado)
    }
    else
    {
        return false
    }    
}
//1 - aplicar validação para verificar se o segundo paramento passado na funcçao cadastrarPet é reamente
// um objeto ou nao, caso contrario, retornar uma mensagem semelhante abaixo.

//2 - aplicar validação para verficar se o objeto passado como paramentro realmente possui todas as propriedades necessarias
// caso contrario, retornar uma mensagem semelhante abaixo: o objeto nao em todas as propriendades necessarias informadas.

cadastrarPet(pets, novoPet)
listarPets()