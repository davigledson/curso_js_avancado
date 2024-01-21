function funcao(){
    //a funcao definida com a palavra function 
    //arguments - sustenta todos os argumentos passados na função
    //    console.log(arguments[10]); -dar pra pegar pelo index também

    console.log(arguments);

}

funcao('Valor',1,2,3,4,5,6,7,8,9,10,11,'davi');

function somarValores(a,b,c){ //mesmo com parametros - ainda tem o arguments
    total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total,a,b,c);
}

somarValores(1,2,3,4,5,6,7,8,9,10,11);

function funcaoVariosParametros(a,b,c,e,f,g,h,i){
    console.log(a,b,c,e,f,g,h,i)
 }

 funcaoVariosParametros(1,2,3) // vai dar underfined nos outros parâmetros

 function somar(a,b = 2,c =4) {
    console.log(a + b + c);
 }

 somar(1,undefined,3) // vai ignorar o parâmetro b (se for null - vai assumir 0)

 //desestruturação	
 function funcao2({nome,sobrenome,idade}) {
    console.log(nome,sobrenome,idade);
 }
funcao2({nome: 'davi', sobrenome: 'gledson', idade: 21});


 //desestruturação de array também 
function funcao3([valor1,valor2,valor3]) {
    console.log(valor1,valor2,valor3);
 }
 funcao3(['davi', 'gledson',21]);

 // ...numeros   - rest operator (operador de resto - tem que ser o ultimo parâmetro da funcao)
 //não tem arguments em arrow functions
const conta = function(operador,acumulador, ...numeros) {
    console.log(operador,acumulador,numeros);

    //in -retorna os indexes
    //of -retorna os valores
    for(let numero of numeros){
        console.log(numero);
       if( operador === '+') acumulador += numero;
       if( operador === '-') acumulador -= numero;
       if( operador === '/') acumulador /= numero;
       if( operador === '*') acumulador *= numero;
       

    }
    console.log(acumulador);
    console.log(arguments);
 };

 conta('+',1,20,40,60,80)

 function args(...args) {
   console.log(args);
 };

 args('+',1,20,40,60,80)