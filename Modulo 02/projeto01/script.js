function trocar(){
    let verificado = document.querySelector('button').classList.contains('preto');
    if(verificado) {
        document.querySelector('button').classList.remove('preto');
        document.querySelector('button').classList.add('vermelho');
    }else{
        document.querySelector('button').classList.remove('vermelho');
        document.querySelector('button').classList.add('preto');
    }
}

function somar(x, y){
    let soma = x + y;
}