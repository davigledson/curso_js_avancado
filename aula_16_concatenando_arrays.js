const num1 = [1, 2, 3, 4];
const num2 = [5,6,7,8, 9];

const num3 = num1 + num2;//retorna uma string - não funcionou
const num4 = num1.concat(num2,[11,12,13,14,15],'davi');
console.log(num4); 

const a = [...num1,'davi',...num2,...[10,11,12]]; //concatena também (rest operator)
console.log(a);