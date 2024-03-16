const nome = 'davi';
const obj = {nome}
const nonoObj = { ... obj}
//cuidado com a barra ( / ) no package.json

class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome
    }
}