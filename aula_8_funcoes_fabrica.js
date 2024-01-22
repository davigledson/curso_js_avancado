//Factory Functions
function criaPessoa(nome,sobrenome,p,a){
    return {
        nome,
        sobrenome,
       get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor){
           valor = valor.split(' ');
           this.nome = valor.shift();
           this.sobrenome = valor.join(' ');
           console.log(valor);
        },
        fala(assunto = 'falando sobre'){
            //this.nome  e mesma coisa que fala p1.nome
            return `${this.peso} está ${assunto}`;
        },
        peso: p,
        altura:a,
        get imc(){ //faz a funcao finge ser um atributo (Getter)
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('davi','gledson',68,1.73);
console.log(p1.fala('empregos'));
console.log(p1.imc);
console.log(p1.peso);
p1.nomeCompleto = 'davi gledson da silva';
console.log(p1.nome);
console.log(p1.sobrenome);