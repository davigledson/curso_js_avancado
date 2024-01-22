function criaCalculadora(){
    return {

        display: document.querySelector('.display'),
       
        inicia(){
                    //sempre que tem referencia uma chave dentro objeto precisa da palavra this
                    this.cliqueBotoes();
                    this.pressionaEnter();
                    
                },

                


        clearDisplay(){
            this.display.value = '';
        },
        apagaUm(){
            this.display.value =this.display.value.slice(0,-1)
            //slice - retorna a sessao da string
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },
        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
              if (e.keyCode === 8) {
                e.preventDefault();
                this.clearDisplay();
              }
            });
          },
        realizaConta(){
            //eval() -- funcao perigosa do javascript (executa javascript)

            let conta = this.display.value;
            try {
                conta = eval(conta);

                if(!conta){
                    alert('conta inválida');
                    return;
                }
                this.display.value =  String(conta);
            } catch (e) {  alert('conta inválida');  return;}
           
        },

        
        cliqueBotoes(){
            document.addEventListener('click', e =>{
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm()
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
                this.display.focus();
            });

            
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },
        
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();