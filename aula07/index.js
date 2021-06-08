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

// Desafio1 : Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomePets" 
// que exiba no terminal o NOME de todos os pets. 
// (utilizar o foreach)
let ListarNomePets = () =>
{
    pets.forEach(pet => {
        console.log('Nome: ' + pet.nome)
    });
}
ListarNomePets()

//Desafio2: Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomeDonoPets" que exiba no 
//terminal o NOMEDONO de todos os pets.  (Usar for of)
let ListarNomeDonoPets = () =>
{
    for (const pet of pets) {
        console.log('Nome do dono: ' + pet.nomeDono)
    }
}
ListarNomeDonoPets()

//Desafio3: Utilizando o Array de Pets disponibilizado, criar uma função "ListarTipo" que irá receber 
//um parâmetro com o tipo e retornar todos os pets desse tipo. (Usar o Filter)
let ListarTipo = (tipoPet = 'Cachorro') => // opcional, caso nao informe na chamada da função
{
    let petsFiltradosPorTipo = pets.filter(pet => 
        {
            return pet.tipo == tipoPet
        })
        return petsFiltradosPorTipo
}
console.log(ListarTipo('Cachorro'))

//Desafio4: Utilizando o Array de Pets disponibilizado, criar uma função "DataDeCadastro". 
//Essa função deve retornar um array onde será adicionado a data de hoje em todos os objetos. 
//O nome da nova propreie e dade deve ser "DataCadastro". (Usar Object Date e MAP)

// objet -> objeto.propriedade
// array -> array['propriedade']

let DataDeCadastro = () =>
{
    let dataAtual = new Date();
    let petsNovo = pets.map(pet => {
        pet['dataCadastro'] = dataAtual
        return pet
    })
    console.log(petsNovo)
}
DataDeCadastro()

//Desafio5: Utilizando o Array de Pets disponibilizado, criar uma função "ListaDadosPet" que irá 
//receber como parâmetro um objeto. Essa função deve exibir os dados de um pet.
// (usar Desestruturação de objetos)
const listarDadosPet = (pet) => {
    const {nome, nomeDono, idade, tipo, raca, peso, genero, cor, vacinado} = pet;
    return console.log(
                        `Nome: ${nome}
                        Nome do dono: ${nomeDono}
                        Idade: ${idade}
                        Tipo: ${tipo}
                        Raça: ${raca}
                        Peso: ${peso}
                        Genero: ${genero}
                        Cor: ${cor}
                        Está vacinado? ${vacinado}`
                        )
  }


listarDadosPet(pets)

//Desafio6: Utilizando o Array e a função do desafio 5 , criar uma função "LitarPets" que irá 
//receber como parâmetro o array de pets e um callback. Essa função deve exibir os dados de todos
// os pets cadastrados.  (aplicar a função ListaDadosPet utilizada como callback)

const listarDadosDoPet = (ArrayPets, callback) =>
{
    for(const pet of ArrayPets)
    {
        callback(pet)
    }
}
listarDadosDoPet(pets, listarDadosPet)
