function rand(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function  esperaAi(msg,tempo){


    //resolva vai para o then
    //reject vai para o catch
    return new Promise((resolve,reject) =>{
        //reject(new Error('ERRO')) // os errors do js
        
      setTimeout(()=> {  
        if(typeof msg !== 'string') {
            reject('CAIR NO ERRO');
            return;
        }
        resolve(msg.toUpperCase() + '- Passei na promise');
        return;
    },tempo);  
    });
    
    
}

function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.resolve('Pagina em cache')
    } else {
        return esperaAi('baixei a pagina',3000)
    }
}

baixaPagina()
.then(dadosPaginas => {
    console.log(dadosPaginas)
})
.catch(e => console.log('ERRO' + e))

//Promise.all 
//Promise.race 
//Promise.resolve 
//Promise.reject

const promises = [
    
    esperaAi('Promisse 1', rand(1,3)),
    esperaAi('Promisse 2', rand(1,3)),
    esperaAi('Promisse 3', rand(1,3)),
    esperaAi(1000,rand(1,3))
    
];






//all - vai tentar resolve todas a promisses (se uma ser errado, ele rejeita todas) 
//race - a primeira promessa a ser resolvida vai ser entregada
Promise.race(promises)
 .then(function(valor){
    console.log(valor);
 })
 .catch(function(erro){
    console.log(erro)
 })
