function Conta(agencia, conta,saldo){
 this.agencia = agencia;
 this.conta = conta;
 this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
       
        return;
    }

    this.saldo -= valor;
    this.verSaldo()
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo()
}
Conta.prototype.verSaldo = function() {
    console.log(`Agencia / Conta: ${this.agencia}/${this.conta} Saldo: R$ ${this.saldo.toFixed(2)}`)
}

// const conta1 = new Conta(11,22,10);
// console.log(conta1);

// conta1.depositar(11);
// conta1.depositar(10);
// conta1.sacar(30);


function ContaCorrente(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > ( this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        
        return;
    }

    this.saldo -= valor;
    this.verSaldo()
}

const cc = new ContaCorrente(11,22,0,100);
cc.depositar(10)
cc.sacar(110)
cc.sacar(1)



console.log('------------------------------------------')
//POUPANÇA
function ContaPoupanca(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite = limite
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca

const cp = new ContaPoupanca(12, 33 ,0)
cp.depositar(10)
cp.sacar(110)
cp.sacar(1)