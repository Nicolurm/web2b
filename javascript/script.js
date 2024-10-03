
 var segundos = 0;
function temporizador(){
    segundos = segundos + 1; //segundos =+ 1; segundos++
    document.getElementById("contador").innerHTML = segundos;
    }

function iniciar(){
    setInterval(temporizador,1000);
    }

function stop(){
    clearInterval();   //para el temporizador
    }
    