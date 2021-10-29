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