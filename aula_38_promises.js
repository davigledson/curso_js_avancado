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
        if(typeof msg !== 'string') reject('BAD VALUE')
      setTimeout(()=> {
        //console.log(msg);
        resolve(msg);
        
    },tempo);  
    });

    
    
}

esperaAi('Conexao com o DB' , rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE',rand(1,3))
    })
    .then(resposta => {
       return resposta + ' Tratando os dados da BASE';

    }) .then(resposta => {
        console.log(resposta)
        return esperaAi('Exibe os dados na tela',rand(1,3))
    }) .then(resposta => {
        console.log(resposta)
    }).then(() => {
        console.log('Eu serei o ultimo a ser exibido')
    })
    .catch(e => {
        console.log('ERRO:', e)
    })

console.log('isso aqui será exibido antes de qualquer promisse')