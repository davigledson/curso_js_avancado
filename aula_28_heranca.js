//Produto
//Camiseta = cor, caneca = material
function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}


function Camiseta(nome,preco,cor){
    Produto.call(this,nome,preco);
    this.cor = cor;
}

//Herança
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta; //faz com o  o contrutor seja camiseta  em vez de produto

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}
function Caneca(nome,preco,material,estoque){
Produto.call(this,nome,preco);
this.material = material;
 Object.defineProperty(this,'estoque',{
    enumerable: true,
    configurable: false,
    get: function(){
        return estoque
    },
    set: function(valor){
        if( typeof valor !== 'number') return;
        estoque = valor
    }
 })
}
Caneca.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Caneca

const produto = new Produto('Gen',111)
const camiseta = new Camiseta('regata',7.5,'preta');
const caneca = new Caneca('Caneca', 12 , 'Plastico', 5);

console.log(camiseta);
console.log(produto);
console.log(caneca);
console.log(caneca.estoque);