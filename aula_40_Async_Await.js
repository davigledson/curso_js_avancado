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

// esperaAi('fase 1', rand(0,3))
// .then(valor => 
//     {
//         console.log(valor)
//         return esperaAi("Fase 2",rand())
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi("Fase 3", rand())
//     })
//     .then(fase => {
//         console.log(fase)
//         return fase
//     })
//     .then(fase => {
//         console.log('Terminamos na fase:', fase)
//     })
//     .catch(e => console.log(e))


//SUBTITUI O CODIGO ACIMA
//async vai permitir que utilize a palavra await

async function executa(){
    //await =  esperas as promessas
    try{

   const fase1 = await esperaAi('fase 1', rand()) 
   console.log( fase1)
   const fase2 = await esperaAi('fase 2', rand())
   // const fase2 = await esperaAi(2, rand())  
   console.log( fase2)
   const fase3 = await esperaAi('fase 3', rand()) 
   console.log( fase3)
   console.log('Terminamos na fase:', fase3)
    } catch(e){
        console.log(e)
    }
}
executa()

/**
 * as promisses tem tres estados
 * Pending -> pendente
 * fullfilled -> resolvida
 * rejected -> rejeitada
 */

//exemplo de promisse pending
const teste2 = esperaAi('qlq',5000)
console.log(teste2)