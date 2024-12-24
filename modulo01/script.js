var hora = 13;

if (hora < 12) {
    console.log("Bom dia!")
}else {
    console.log("Não é de manha!")
}

var title = document.getElementById('title')

if (hora < 12){
    title.innerHTML = "Bom dia! João Alvaro"
}else{
    title.innerHTML = "Não é de manha, João Alvaro."
}

var email = "carteira conectada."

title.innerHTML = "olá " + email;