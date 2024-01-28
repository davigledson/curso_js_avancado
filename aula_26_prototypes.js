//Construtora -> molde(classe)

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'ORIGINAL' + this.nome + ' ' + this.sobrenome
}
Pessoa.prototype.estouAqui = 'hahaha';

// a função nomeCompleto (acima sobrescreve o prototype abaixo)
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}

//Pessoa.prototype === pessoal._proto_      saida = true

// instância 
const pessoa1 = new Pessoa('davi','gledson'); // <- Pessoa = Função construtora

const data = new Date(); // <- Pessoa = Função construtora

console.dir(pessoa1)
console.dir(data)


//cadeia
//pessoa1 --> Pessoa.prototype --> Object.prototype