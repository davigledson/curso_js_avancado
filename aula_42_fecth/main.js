//XMLHttpRequest


document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if( tag === 'a'){
        e.preventDefault();
        carregarPagina(el);
    }
})

 async function carregarPagina(el){
    try{
const href = el.getAttribute('href');
    const response = await fetch(href);
    if(response.status !== 200) throw new Error("ERRO 404NOSSO")
    const html = await response.text();
    carregarResultado(html)
    } catch(e){
        console.log(e)
    }

    
   
   
    
   
    
}
function carregarResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response
}

//já retorna uma promise
fetch('pagina2.html')
 .then(resposta => {
    if(resposta.status !== 200) throw new Error("ERRO 404 NOSSO")
    return resposta.text();
 })
 .then(html => console.log(html))
.catch(e => console.log(e))