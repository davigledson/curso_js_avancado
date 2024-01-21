//excopo lexico  a função conhece o local aonde foi declarada


const nome = 'davi';
function falaNome() {
    const nome = 'otavio';
    console.log(nome);
}
falaNome();

function usaFalaNome(){
    const nome = 'luiz';
    falaNome();
}
usaFalaNome();