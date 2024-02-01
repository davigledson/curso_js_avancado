class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;

    }

    aumentarVolume(){
        this.volume += 2
    }
//método de instancia
    diminuirVolume(){
        this.volume -= 2
    }

    //método estático 
    static trocaPilha(){
        //
        console.log('Ok, vou trocar')
    }

    static soma(x,y){
        //
        return x + y;
    }
  

}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
//chama métodos estáticos
ControleRemoto.trocaPilha()
console.log(controle1)

//método estático
console.log(Math.random());
console.log(ControleRemoto.soma(2,4))