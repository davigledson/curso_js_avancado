//new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveA: 'B'
    // __proto__:  objA
}

const objC = new Object();
objC.chaveC = 'C';

//seta o prototype de objB, como sendo  o de objA 
Object.setPrototypeOf(objB,objA);
Object.setPrototypeOf(objC,objB);
//Object.getPrototypeOf(objB)

console.log(objC);

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}


Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}
const p1 =  new Produto('camiseta',100);
//p1.desconto(10)

//literal
const p2 = {
    nome: 'caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(100)
console.log(p2)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
     },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },

});
p3.preco = 113
p3.aumento(110)
console.log(p3)

