class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this,'cpfLimpo',{
            writable: false,
            enumerable: true,
            configurable: false,
            //tudo que não é numero
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;

    }

    
    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1); 
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    //quando não utiliza a palavra this em um elemento da classe, ele pode se torna um método estático (metodos da classes)
   static geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length +1;
        


        for(let stringNumerica of cpfSemDigitos){
            //console.log(stringNumerica,typeof stringNumerica)
            total += reverso * Number(stringNumerica)
            reverso--
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0'
    }
    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        if(this.geraNovoCpf());

        //console.log(this.novoCPF)
        return this.novoCPF === this.cpfLimpo;
    }
}

// let validaCPF = new ValidaCPF('160.657.104-40');
// console.log(validaCPF.valida())

// if(validaCPF.valida()){
//     console.log('CPF válido');
// } else {
//     console.log('CPF invalido')
// }