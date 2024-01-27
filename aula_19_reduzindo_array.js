
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
//some todos os numeros (reduce)
const total = numeros.reduce(function(acumulador,valor,indice,array){
    acumulador += valor
    console.log(acumulador,valor);
    return acumulador
},0)
console.log(total)

//retorne um array com os pares (Filter)
const total2 = numeros.reduce(function(acumulador,valor,indice,array){
    //if (valor % 2 ===0) acumulador.push(valor)// parees
    //if (valor % 2 !==0) acumulador.push(valor)// impares
    //if (valor % 8 ===0) acumulador.push(valor)// multiplos de 8
    acumulador.push(valor *2)// multiplicados de 2
     return acumulador
    
   
},[])
console.log(total2)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Davi', idade: 30},
    {nome: 'Eduardo', idade: 12},
    {nome: 'yasmina', idade: 15},
    {nome: 'Gledsona', idade: 20},

];
//retorne a pessoa mais velha
const maisVelha = pessoas.reduce(function(acumulador,valor,indice,array){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor
},0)
//se não passa o valor inicial, o reduce vai pega o primeiro elemento
console.log(maisVelha)