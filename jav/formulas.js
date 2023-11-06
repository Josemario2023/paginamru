'use strict'
function limpiar(){
    document.getElementById("velocidad-1").value="";
    document.getElementById("tiempo-1").value="";
    document.getElementById("respuesta-1").innerHTML="";
}

function frdistancia(){
    let var1= parseFloat(document.getElementById('velocidad-1').value);
    let var2=parseFloat(document.getElementById('tiempo-1').value);


    if (isNaN(var1) || isNaN(var2)) {
        document.getElementById('respuesta-1').innerHTML = "Ingresa valores numéricos válidos.";
        alert("Ingresa valores numéricos válidos.");
    } else {
        let resultado = var1 * var2;
        document.getElementById('respuesta-1').innerHTML = `La distancia es ${resultado.toFixed(2)}`;
       
    }

}

function borrador(){
    document.getElementById("distancia-1").value="";
    document.getElementById("tiempo-2").value="";
    document.getElementById("respuesta-2").innerHTML="";
}

function frvelocidad(){
    let var1= parseFloat(document.getElementById('distancia-1').value);
    let var2=parseFloat(document.getElementById('tiempo-2').value);


    if (isNaN(var1) || isNaN(var2)) {
        document.getElementById('respuesta-2').innerHTML = "Ingresa valores numéricos válidos.";
        alert("Ingresa valores numéricos válidos.");
    } else {
        let resultado = var1 / var2;
        document.getElementById('respuesta-2').innerHTML = `La velocidad es  es ${resultado.toFixed(2)}`;
    }
}

function ultimoborrar(){
    document.getElementById("distancia-2").value="";
    document.getElementById("velocidad-2").value="";
    document.getElementById("respuesta-3").innerHTML="";
}

function frtiempo(){
    let var1= parseFloat(document.getElementById('distancia-2').value);
    let var2=parseFloat(document.getElementById('velocidad-2').value);


    if (isNaN(var1) || isNaN(var2)) {
        document.getElementById('respuesta-3').innerHTML = "Ingresa valores numéricos válidos.";
        alert("Ingresa valores numéricos válidos.");
    } else {
        let resultado = var1 / var2;
        document.getElementById('respuesta-3').innerHTML = `el tiempo es ${resultado.toFixed(2)}`;
    }
}
