const produto = {nome: 'Produto', preco: 1.8}
// const caneca ={ 
//     ...produto,
//     material: 'porcelana'
// };    (spreed operator)
const caneca = Object.assign({},produto, {material: 'porcelana'});
produto.nome = 'miaiu';
console.log(caneca);
Object.defineProperty(produto, 'nome',{
    writable: false,
    configurable: false,
    value: 'qualquer outra coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);

console.log(Object.entries(produto)) //retona na forma de array

for(let entry of Object.entries(produto)){
    console.log(entry[0],entry[1]);
}