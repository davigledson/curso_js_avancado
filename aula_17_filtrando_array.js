//Filter -> sempre retorna um array com a mesma quantidade de elementos ou menos.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function callbackFilter(valor){
//  if (valor > 10){
//     return true
//  } else {
//     return false
//  }

return valor >10; //já retorna a condição
}

//retorne os números maiores que 10
//const nuemerosFiltrados = numeros.filter(callbackFilter) -uma forma de chamar

// const nuemerosFiltrados = numeros.filter((valor) => {
//     return valor > 10;
// }); - forma mais resumida de chamar

// const nuemerosFiltrados = numeros.filter(valor => valor > 10 );  forma mais resumida ainda

// const nuemerosFiltrados = numeros.filter((valor,indice, array) =>{ console.log(valor,indice,array); });  o que a funcao retorna
//console.log(nuemerosFiltrados);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Davi', idade: 30},
    {nome: 'Eduardo', idade: 12},
    {nome: 'yasmina', idade: 15},
    {nome: 'Gledsona', idade: 20},

];

//filter retorna um novo array, não meche no array original

//retorna as pessoa cujo nome seja maior que 5 letras
const pessoasComNomesGrande = pessoas.filter(obj => obj.nome.length >=5);
console.log(pessoasComNomesGrande);

//pessoas com mais de 50 anos
const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade >=50);
console.log(pessoasComMaisDe50);

//pessoas que termina com A
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);