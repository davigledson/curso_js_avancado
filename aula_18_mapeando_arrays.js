const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


// const numerosEmDobro = numeros.map(function(valor,indice,array){
//     console.log(valor,indice,array) //parecido com o filter
// });

const numerosEmDobro = numeros.map(function(valor){
   return valor *2;
});
console.log(numerosEmDobro)







const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Davi', idade: 30},
    {nome: 'Eduardo', idade: 12},
    {nome: 'yasmina', idade: 15},
    {nome: 'Gledsona', idade: 20},

];

const nomes = pessoas.map((obj) => obj.nome);
console.log(nomes);
// const idades = pessoas.map((obj) => obj.idade);
// console.log(idades);

//removendo a chave nome do objeto
const idades = pessoas.map((obj) => ({idade: obj.idade})); //retorno de obj (expressão)
console.log(idades);

//adicione uma chave id em cada objeto
const comIds = pessoas.map(function(obj,indice){
    obj.id =( indice +1) * 1000;
    return obj
})
console.log(comIds);
//funcao maps meche no array original 


const comIds2 = pessoas.map(function(obj,indice){
    //copia o objeto original
    const newObj = {...obj};
    newObj.id =indice ;
    return obj
})
console.log(comIds2);