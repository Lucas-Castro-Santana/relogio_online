var segundos = 0;
var minutos = 0;
var horas = 0;
var Choras = 0;
var Cminutos = 0;
var Csegundos = 0;
var Cmilsegundos = 0;
var dias = 0;
var data = new Date;
var myVar = setInterval(myTimer, 1000);
var isCount = false;
var isStoped = true;
var voltas = [];
var hidebtn = document.getElementById("container");
var show = document.getElementById("action-btn");
var isvisible = false;

show.addEventListener("click", function() {
    isvisible = true;

    if (isvisible === true) {
    container.style.display = "block";
    }   else {
    container.style.display = "none";
    }
   console.log(container)
});



//relogio
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
//temporizador
//função que inicia o temporizador
var contagem;
function iniciarContador() {
    if (horas == 0 && minutos == 0 && segundos == 0) {
        alert("por favor insira algum numero")
    }
    else if (isCount == false) {
        contagem = setInterval(contdown, 1000);
        isCount = true;
        console.log(isCount)
    }

}
//contador do temporizador (em forma decrescente)
function contdown() {
    if (isCount) {
        if (segundos == 0) {
            segundos = 59;

            if (minutos == 0) {
                minutos = 59;
                horas--;
            } else {
                minutos--;
            }
        } else {
            segundos--;
        }
        if (horas == 0 && minutos == 0 && segundos == 0) {
            clearInterval(contagem);
            isCount = false;
            console.log(isCount)

        }
        document.getElementById("demo").innerHTML = `${horas}:${minutos}:${segundos}`;
        console.log(isCount)
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

//cronometro
//função que inicia o cronometro
var cronometrar;
function iniciarCronometro() {
    cronometrar = setInterval(cronometro, 10);
    isStoped = false;
}  
//contador do cronometro (em forma crescente)
function cronometro() {
    if (isStoped == false) {
        if (Cmilsegundos == 99) {
            Cmilsegundos = 0;

            if (Csegundos == 59) {
                Csegundos = 0;

                if (Cminutos == 59) {
                    Cminutos = 0
                    if (Choras == 24) {
                        Choras = 0;
                    } else {
                        Choras++;
                    }
                } else {
                    Cminutos++;
                }
            } else {
                Csegundos++;
            }
        } else {
            Cmilsegundos++;

        }
        document.getElementById("demo").innerHTML = `${Cminutos}:${Csegundos}:${Cmilsegundos}`;
        //verificações do cronômetro
        if (Choras >= 1) {

            document.getElementById("demo").innerHTML = `${Choras}:${Cminutos}:${Csegundos}`;
        }
    }
}
//função para parar o cronômetro
function pararcrono() {
    clearInterval(cronometrar);
    isStoped = true;
}
function redefinir() {
    //função redefini os valores do cronometro
    if (isStoped == true) {
        //redefini o cronometro
        Choras = 0;
        Cminutos = 0;
        Csegundos = 0;
        Cmilsegundos = 0;
        document.getElementById("demo").innerHTML = `${Cminutos}:${Csegundos}:${Cmilsegundos}`;
        //redefini as voltas
        voltas = [];
        document.getElementById("voltas").innerHTML = ``;
    }//função que grava as voltas do cronometro
    else if (isStoped == false) {
        voltas.push(`${Cminutos}:${Csegundos}:${Cmilsegundos}`);
        document.getElementById("voltas").innerHTML = voltas;

    }
    
}