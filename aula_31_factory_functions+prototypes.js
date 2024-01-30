const falar = {
    fala(){
        console.log(`${this.nome} está falando`)
    },
}
const comer = {
    come(){
        console.log(`${this.nome} está comendo`)
    },
}

const beber = {
    bebe(){
        console.log(`${this.nome} está bebendo`)
    },
}
const pessoaPrototype = Object.assign({}, falar, comer, beber)

function criaPessoa(nome,sobrenome){
   
    return Object.create(pessoaPrototype,{
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}


const p1 = criaPessoa('davi','gledson');
const p2 = criaPessoa('davi2','gledson2');

p1.fala()