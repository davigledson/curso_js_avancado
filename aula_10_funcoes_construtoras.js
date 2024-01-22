//fucnoes construtora -> objetos
//funcoes fabrica -> objetos

//Construtora -> Pessoa(new)
function Pessoa(nome,sobrenome){
    //atributos privados
    this.nome = nome;
    this.sobrenome = sobrenome;
    //Pessoa.nome 
    this.metodo = function(){
        console.log(this.nome +': sou um método');
    }
}

const p1 = new Pessoa('Davi','Gledson')
const p2 = new Pessoa('Davia','Gledsonod')
console.log(p1)
p1.metodo()