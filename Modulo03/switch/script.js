/*
let dia = 3;
let diaNome = '';

switch(dia){
    case 6:
    case 7:
        diaNome = 'Fim de semana';
        diaNome = 'Fim de semana';
        break;
    default:
        diaNome = 'Dia de samana';
        break
    
}

document.getElementById('dia').innerHTML = "Hoje é " + diaNome;

*/
// FOR LOOP 
/*
let texto = '';
for(let i = 10; i < 50; i++){ 
    texto = texto + i + '<br/>';
}
document.getElementById("demo").innerHTML = texto;
*/

/*
let carros = ['ferrari', 'fusca', 'palio', 'corola'];
let html = '<ul>';

for (let i in carros){
    html += '<li>'+ carros[i]+'</li>';
}

html += '</ul>';

document.getElementById("demo").innerHTML = html;

*/

let html = '';

let c = 0; 
document.getElementById('demo').innerHTML = 'Olá';
while(c <= 10) {
    html += "Numero: " +c+ "<br/>";
    c ++;
}

document.getElementById('demo').innerHTML = html;