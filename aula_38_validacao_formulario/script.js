class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }


    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos()
        //console.log('formulario não enviado')
        const senhasValidas = this.senhasSaoValidas()

        if(camposValidos && senhasValidas){
            alert('formulario enviado')
            this.formulario.submit()
        }
    }

    senhasSaoValidas(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha')
        const repetirsenha = this.formulario.querySelector('.repetir-senha')

        if(senha.value !== repetirsenha.value){
            valid = false;
            this.criaErro(senha,'Campo senha e repetir senha precisa ser iguais')
            this.criaErro(repetirsenha,'Campo senha e repetir senha precisa ser iguais')

        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha,'Senha precisa estar entre 6 e 12 caracteres')
        }

        return valid
    }

    camposSaoValidos(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){

            
            const label = campo.previousElementSibling.innerText;
            //se o campo estiver vazio
            if(!campo.value){
                this.criaErro(campo,`o campo ${label} não pode estar em branco`)
                valid = false
            }
            //console.log(campo)
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid
    }
    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true
        if(usuario.length < 3 || usuario.length > 12 ){
            this.criaErro(campo,'U usuario precisa ter entre 3 e 12 caracteres');
            valid = false
        }
        //expresao (qualquer letra entre a e z minuculo)
        //qualquer letra entre a  e z maiúsculo
        //qualquer numero entre 0 a 9
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo,'Nome de  usuario precisa  conter apenas letras e/ou numeros'); 
            valid = false
        }
        return valid
    }
    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);
        if(!cpf.valida()){
            this.criaErro(campo,'CPF invalido')
        }
        return true;
    }
    criaErro(campo,msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend',div)
    }
}

const valida = new ValidaFormulario()