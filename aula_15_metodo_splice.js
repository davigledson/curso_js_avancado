//               -5       -4        -3        -2         -1
//                0       1           2        3        4
const nomes = ['davi','gledson','carlos','edurado','ryan'];

//nomes.splice(indice,delete,elem1,elem2,elem3);
//pop
//const removidos = nomes.splice(3,0,'luiz'); //vai adicionar luiz no index 3 e empurar o resto da lista

//const removidos = nomes.splice(3,1,'luiz'); //vai substituir luiz no index 3 

const removidos = nomes.splice(3,2,'luiz','andre'); //vai remover 2 elemento a partir do index 3 e subtituir
console.log(nomes, removidos);

console.log(Number.MAX_VALUE); //maior numero do javascript

//simula o push
nomes.splice(nomes.length,0,'luiz','cahorro','mirannda');
console.log(nomes);

//simula o unshift
nomes.splice(0,0,'luiz','cahorro','mirannda');
console.log(nomes);
