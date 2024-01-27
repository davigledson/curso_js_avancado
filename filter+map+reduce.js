//retorne a soma do sobro de todos os pares
// filtrar pares
//dobrar os valores
//reduzir (somar tudo)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

//forma grande

// const numerosPares = numeros.filter(function(valor){
//     return valor % 2 === 0;
// }).map(function(valor){
//     return valor *2
// }).reduce(function(acumulador,valor){
//     return acumulador + valor
// });


const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor *2)
.reduce((acumulador,valor) => acumulador + valor);
console.log(numerosPares)