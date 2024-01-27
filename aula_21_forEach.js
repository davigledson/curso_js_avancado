const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// for (let valor of a1){
//     console.log(valor);
// }

// numeros.forEach(function(valor,indice,array){
//     console.log(valor,indice,array)
// })

numeros.forEach((valor,indice,array) => console.log(valor));

let total = 0;
numeros.forEach((valor) =>{ total += valor});
console.log(total);