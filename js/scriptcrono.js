var cronometrar;
var Choras = 00;
var Cminutos = 00;
var Csegundos = 00;
var Cmilsegundos = 00;
var isStoped = true;
var voltas = [];
function iniciarCronometro() {
    cronometrar = setInterval(cronometro, 10);
    isStoped = false;
}  
//contador do cronometro (em forma crescente)
function cronometro() {
    if (isStoped == false) {
        if (Cmilsegundos == 99) {
            Cmilsegundos = 00;

            if (Csegundos == 59) {
                Csegundos = 00;

                if (Cminutos == 59) {
                    Cminutos = 00;
                    if (Choras == 24) {
                        Choras = 00;
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
        Choras = 00;
        Cminutos = 00;
        Csegundos = 00;
        Cmilsegundos = 00;
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