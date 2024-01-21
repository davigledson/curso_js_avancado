//Declaração de funcao (function hoisting) - o motor do javascript vai elevar essa função
falaOi()
function falaOi(){
    console.log('oi');
}
//Fisrt-class objects (Objetos de primeira classe) - (pode tratar a funcao como dado)

//function expression
const souUmDado = function () {
 console.log('sou um dado');
}
//pode nomear a função tambem  (não é comum)
const souUmDado2 = function nomeDaFuncao () {
    console.log('sou um dado');
   }
souUmDado()

function executaFuncao(funcao){
    console.log('vou executar sua funcao abaixo');
    funcao();
}

executaFuncao(souUmDado);

//Arrow function - function expression só que bem mais curta
const funcaoArrow = () => {
    console.log('sou uma arrow function');
}

funcaoArrow();

//dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
}
obj.falar();

//versoes mais mais novas do javascript - permite assim
const obj2 = {
    falar() {
        console.log('Estou falando... 2');
    }
}
obj2.falar();