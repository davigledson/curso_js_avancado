function Calculadora(){
this.display = document.querySelector('.display');

this.inicia = () =>  {
    this.capturaCliques();
    this.capturaEnter();
};

this.capturaCliques = () => {
    document.addEventListener('click', event => {
        const elemento = event.target;

        if(elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
        if(elemento.classList.contains('btn-clear')) this.clear(elemento);
        if(elemento.classList.contains('btn-del')) this.del();
        if(elemento.classList.contains('btn-eq')) this.realizaConta();
    });
};
this.realizaConta = () => {
try {
 const conta = eval(this.display.value);

 if(!conta) {
    alert('conta invalida');
    return;
 }

 this.display.value = conta;
} catch(e){
    alert('Conta inválida')
    return;
}
}
//como só tem uma linha a arrow functtion, pode tira as {}
this.addNumDisplay = elemento => {this.display.value += elemento.innerText
this.display.focus();
};
this.clear = () => this.display.value = '';
this.del = () => this.display.value  = this.display.value.slice(0,-1);


this.capturaEnter = () => {
    this.display.addEventListener('keyup', e => {
        if(e.key !== 'Enter') return;
        this.realizaConta();
    })
}

}

const calculadora = new Calculadora();
calculadora.inicia();