//closure - é a habilidade da funcao em acessar o escopo léxico 
function retornaFuncao(nome){
    //const nome = 'Luiz';
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Luiz');
const funcao1 = retornaFuncao('João');
console.log(funcao(), funcao1());
//console.dir(funcao(),funcao1());
