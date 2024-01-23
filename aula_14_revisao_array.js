//array literal
const nomes = ['a', 'b', 'c', 'd', 'e'];

nomes[2] = 'davi';
delete nomes[2];
console.log(nomes);

//array contrutor
const nomes2 = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g');
console.log(nomes2);

const novo = nomes;
novo.pop(); //vai refletir no array original 
console.log(nomes);

const copia = [...nomes]; //vai fazer uma copia do array
console.log(copia.length)

removidoFinal = nomes.pop();
removidoInicio = nomes.shift(); // vai realocar todos os indexes do array
console.log(removidoInicio);

nomes.push('Gledson');
nomes.push('silva');

nomes.unshift('benedito'); //adiciona no inicio
console.log(nomes);

const fatia = nomes.slice(1,3); // vai fatiar  o array
console.log(fatia);
const fatia2 = nomes.slice(0,-1); // vai remover o ultimo index


const frase = 'davi gledson da silva benedito';
const nomesSeparados = frase.split(' ');
console.log(nomesSeparados);


const nomeCompleto = 'davi, gledson, da, silva, benedito';
const nomesSeparadosPorVirgulas = nomeCompleto.split(', ');
console.log(nomesSeparadosPorVirgulas);

const uniArray = ['a', 'b', 'c', 'd', 'e'];
const unido = uniArray.join(' separador '); //no join colocar o separador
console.log(unido);

