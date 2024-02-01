class DipositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false
    }

    ligar(){
        if(this.ligado) {
            console.log(this.nome +' já ligado')
           return ;
        } 
        this.ligado = true
    }

    desligar(){

        if(!this.ligado) {
            console.log(this.nome +' já desligado')
           return ;
        } 
        this.ligado = false
    }
}

const d1 = new DipositivoEletronico('Smartphone');
//d1.ligar();
// d1.ligar();
// d1.desligar();
// console.log(d1)

// já recebe as funcoes da classe
//class Smartphone extends DipositivoEletronico {}

class Smartphone extends DipositivoEletronico {
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo
    }
}

//const s1 = new Smartphone('Samsung','Preto','s10');
//console.log(s1)

class Tablet extends DipositivoEletronico {
    constructor(nome,temWifi){
        super(nome);
        this.temWifi = temWifi
    }

    ligar(){
        console.log('Olha, voce alterou o método ligar')
    }

    falaOi(){
        console.log('Oi')
    }
}
const t1 = new Tablet('IPad',true);
t1.ligar()
t1.ligar()