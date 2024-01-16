// Vamos criar um programa para gerenciar os animais de zoologico. Para isso considere os itens a baixo :
// a-) Crie uma lista para armazenar os animais
// b-) Crie um novo animal com as seguintes propriedades : nome, cor, peso, pais_origem, alimentacao, idade
// c-) Crie 5 animais a partir de uma cópia do animal do item anterior ;
// d-) Guarde esses animais na lista de animais ;
// e-) Mude o nome do terceiro animal e do quarto;
// f-) Imprima as informacoes do segundo animal da lista.
// g-) Imprima os dados atualizados do terceiro animal da lista
let listaDeAnimais = [];

let animal = {
    nome: 'Frajola',
    cor: 'preto',
    peso: '6kg',
    pais_origem: 'Brasil',
    alimentação: 'ração',
    idade: '9'
}

let animal2 = {...animal}

animal2.nome = 'Mana',
animal.cor = 'malhada',
animal2.peso = '5kg',
animal2.pais_origem = 'Brasil',
animal2.alimentação = 'ração',
animal2.idade = '5'

let animal3 = {...animal}

animal3.nome = 'Luna',
animal3.cor = 'caramelo' ,
animal3.peso = '40kg' ,
animal3.pais_origem =  'Brasil',
animal3.alimentação = 'ração',
animal3.idade = '3'

let animal4 = {...animal}

animal4.nome = 'Mistura',
animal4.cor = 'cinza',
animal4.peso = '10kg',
animal4.pais_origem = 'Brasil',
animal4.alimentação = 'ração',
animal4.idade= '10'

let animal5 = {...animal}

animal5.nome = 'Madona',
animal5.cor = 'amarela',
animal5.peso = '20kg',
animal5.pais_origem = 'Brasil',
animal5.alimentação = 'ração',
animal5.idade = 'falecida'

let animal6 = {...animal}

animal6.nome = 'João Paulo',
animal6.cor = 'amarelo',
animal6.peso = '200g',
animal6.pais_origem = 'Brasil',
animal6.alimentação = 'sementes',
animal6.idade = 'falecido'

listaDeAnimais.push(animal,animal2,animal3,animal4,animal5,animal6)

animal3.nome = 'Babona'
animal4.nome = 'Ovelha'

console.log(animal2)
console.log(animal3)