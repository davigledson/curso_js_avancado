const pessoas = [
    {id: 3, nome: 'davi'},
    {id: 2, nome: 'gledson'},
    {id: 1, nome: 'silva'},
]
//não estava na retonanado na ordem correta
// const novasPessoas = {}

// for (const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

const novasPessoas = new Map()

for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id,{...pessoa});
}
//console.log(novasPessoas.get(2))


// for (const [identifier, {id,nome}] of novasPessoas){
//     console.log(identifier,id)
// }
                                //keys()
for (const pessoas of novasPessoas.values()){
    console.log(pessoas)
}

novasPessoas.delete(2)
console.log(novasPessoas)