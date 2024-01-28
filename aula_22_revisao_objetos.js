const pessoa = {
    nome: 'Davi',
    sobrenome: 'Gledson',
};

//forma de acessar
console.log(pessoa.nome);//anotacao de ponto
console.log(pessoa['nome']); //anotacao de cochetes

const chave = 'nome';
console.log(pessoa[chave]); 

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio ';

const pessoa2 = {
    nome: 'Davi2',
    sobrenome: 'Gled2'
}

delete pessoa2.nome;
console.log(pessoa1,pessoa2); 


pessoa1.falaNome = function(){
    console.log(`${this.nome} está falando seu nome`);
}
pessoa1.falaNome();
pessoa1.idade = 21;
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
   
}
console.log(pessoa1.getDataNascimento()) 

for(let chave in pessoa1){
    console.log(pessoa1[chave])
}


//padroes de projetos
//factory functions / constructor functions / classes


//Funcao frabrica
function criaPessoa(nome,sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1  = criaPessoa('silva','benedito');
console.log(p1.nomeCompleto)


function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;


    //Object.freeze(this) // não pode alterar nada do objeto (trava ele)
}

// a palavra new vai criar um objeto vazio
//{} <- this (atrela o this a esse objeto)
const p2 = new Pessoa('silva','benedito')
console.log(p2)

//p1 = (ENDERECOMEMORIA) -> 'valor';  - por isso dar para mudar o valor de uma const

Object.freeze(p1) // trava o objeto