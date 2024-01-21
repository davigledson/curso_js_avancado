//IIFE -> immediately invoked function expression
function qualquerCoisa(){
    console.log(12345);
}
qualquerCoisa();

(function(idade,peso,altura){
    const sobrenome = 'David';
    //console.log(nome);

    function criaNome(nome){
        return nome + ' ' + sobrenome
    }

    function falanome(){
        console.log(criaNome('amanda'));
    }

    falanome();
    console.log(idade,peso,altura);
})(30,80,173);

const nome = 'Qualquer coisa';

//IIFE
(function(){

})();