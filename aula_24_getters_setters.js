
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque;
   
    let estoquePrivado =''
    Object.defineProperty(this,'estoque',{
       enumerable: true, //mostra a chave
       configurable: true, // configurável
       get: function(){
        return estoquePrivado;
       },
       set: function(valor){
        if(typeof valor !== 'number'){
            console.log('Bad value');
            return ;
        }
        estoquePrivado = valor;
       }
    });
   
   }
   
   const p1 = new Produto('Camiseta',20,3);
   //p1.estoque = 'o valor que eu quero';
   p1.estoque = 500;
   
   console.log(p1.estoque);
  

//getter e setter na função fabrica
function criaProduto(nome){
return {
    get nome(){
        return nome;
    },
    set nome(valor){
        valor = valor.replace('coisa','nada')
        nome = valor
    }
}
}

const p2 = criaProduto('Camiseta');
p2.nome = 'qualquer coisa';
console.log(p2.nome)