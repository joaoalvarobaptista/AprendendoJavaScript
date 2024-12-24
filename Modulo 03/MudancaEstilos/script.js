function azul(){
    limpar();
    document.getElementById("title").classList.add('azul');
}

function vermelho(){
    limpar();
    document.getElementById("title").classList.add('vermelho');
}

function ocultar(){
    limpar();
    document.getElementById("title").classList.add('oculto');
}

function limpar(){
    document.getElementById("title").classList.remove("azul");
    document.getElementById("title").classList.remove("vermelho");
    document.getElementById("title").classList.remove("oculto");
}