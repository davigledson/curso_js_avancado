//return
//Retorna um valor
//Termina a função

function soma(a,b) {
    return a + b;
}
function soma2(a,b) {
   console.log(a +b)
}
console.log(soma(5,3))

function criaPessoa(nome,sobrenome){
    return {nome,sobrenome}
}

const p1 = criaPessoa('davi','gledson');
const p2 = {
    nome: 'davi',
    sobrenome: 'gledson'
};

console.log(typeof p1);
console.log(typeof p2);


function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto
}

//olaMundo é uma função
const olaMundo = falaFrase('olá');
console.log(olaMundo('Mundo!'))

//outro exemplo
const fala = falaFrase('olá');
const resto = fala('mundo!');
console.log(resto);

// function duplicar(n){
//     n * 2
// }

// function triplica(n){
//     n * 3
// }

// function quadriplica(n){
//     n * 4
// }

//outro exemplo
function criarMultiplicador(multiplicador){
    return function(n){
         return n * multiplicador;
    }
}
//função closere
const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3);
const quadripica = criarMultiplicador(4);
console.log(duplica(2));
console.log(triplica(3));
console.log(quadripica(4));