//XMLHttpRequest
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', obj.url,true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
           if(xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText);
           } else {
            reject(xhr.statusText)
           }
        })
    })
    //jeito antigo
    const xhr = new XMLHttpRequest();
    xhr.open('GET', obj.url,true);
    xhr.send();

    xhr.addEventListener('load', () => {
       if(xhr.status >= 200 && xhr.status < 300) {
        obj.success(xhr.responseText);
       } else {
        obj.error(xhr.statusText)
       }
    })
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if( tag === 'a'){
        e.preventDefault();
        carregarPagina(el);
    }
})

async function carregarPagina(el){
    const href = el.getAttribute('href');
    objConfig = {
        
        method: 'GET',
        url: href,

        //sem promise
        // success(response){
        //     carregarResultado(response)
        // },
        // error(){
        //     console.log(errorText);
        // }
    }
    try {
       const response = await request(objConfig);
    carregarResultado(response) 
    } catch(e){
        console.log(e)
    }
    
}
function carregarResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response
}