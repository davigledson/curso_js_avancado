//defineProperty (define uma) - defineProperties (defini varias)

function Produto(nome,preco,estoque){
 this.nome = nome;
 this.preco = preco;
 //this.estoque = estoque;

 Object.defineProperty(this,'estoque',{
    enumerable: true, //mostra a chave
    value: estoque, //valor
    writable: false, //poder alterar (p1.estoque = 500000)
    configurable: true // configurável
 });


 Object.defineProperties(this,{
    nome: { 
        enumerable: true, //mostra a chave
        value: nome, //valor
        writable: true, //poder alterar (p1.estoque = 500000)
        configurable: true // configurável

    },
    preco: {
        enumerable: true, //mostra a chave
        value: preco, //valor
        writable: true, //poder alterar (p1.estoque = 500000)
        configurable: true // configurável
    },
 })
}

const p1 = new Produto('Camiseta',20,3);
p1.estoque = 500000
console.log(p1)
console.log(Object.keys(p1))
