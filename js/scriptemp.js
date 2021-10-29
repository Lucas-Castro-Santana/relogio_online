var segundos = 00;
var minutos = 00;
var horas = 00;
var data = new Date;
var isCount = false;
var contagem;
function iniciarContador() {
    if (horas == 00 && minutos == 00 && segundos == 00) {
        alert("por favor insira algum numero")
    }
    else if (isCount == false) {
        contagem = setInterval(contdown, 1000);
        isCount = true;
        
    }

}
//contador do temporizador (em forma decrescente)
function contdown() {
    if (isCount) {
        if (segundos == 00) {
            segundos = 59;

            if (minutos == 00) {
                minutos = 59;
                horas--;
            } else {
                minutos--;
            }
        } else {
            segundos--;
        }
        if (horas == 00 && minutos == 00 && segundos == 00) {
            clearInterval(contagem);
            isCount = false;
    

        }
        document.getElementById("demo").innerHTML = `${horas}:${minutos}:${segundos}`;

    }
}
//variaveis de tempo
//variavel das horas
function SetHour() {
    horas = data.setHours = window.prompt("Selecione a quantidade de horas");
}
//variavel dos minutos
function SetMinute() {
    minutos = data.setMinutes = window.prompt("Selecione a quantidade de minutos");
}
//variavel dos segundos
function SetSeconds() {
    segundos = data.setSeconds = window.prompt("Selecione a quantidade de segundos");
}
