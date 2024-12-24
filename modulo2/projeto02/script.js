function subirTela(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: 'smooth'
    });
}


function decidirBotaoScroll(){
    if (window.scrollY === 0){
        //ocultar o botão
        document.querySelector('.scroll-button').style.display = 'none';
    }else{
        //mostrar o botão
        document.querySelector('.scroll-button').style.display = 'block';
    }
}

// setInterval(decidirBotaoScroll, 1000);

//Adicionando um evento que monitora o scroll da tela.

window.addEventListener('scroll', decidirBotaoScroll);

function digitou(){
    console.log('Voce Digitou!')
}