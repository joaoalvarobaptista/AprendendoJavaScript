function limpar(){
    document.getElementById("telefone").classList.remove("ocultar");
    document.getElementById("telefone").classList.remove("mostrar");
}

function mostrar(){
    limpar();
    document.getElementById("telefone").classList.add("mostrar");
    document.getElementById("button").style.display = "none";
}


// Outra solução possivel é alterando o estilo do elemento diretamente. 
/*
function mostrarTelefone(){
    document.getElementById("telefone").style.display = "block";
}
*/
