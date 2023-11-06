'use strict'
function limpiar_1(){
    document.getElementById("velocidad-inicial-1").value="";
    document.getElementById("aceleracion-1").value="";
    document.getElementById("tiempo-1").value="";
    document.getElementById("respuesta-1").innerHTML="";
}

function frvelocidadfinal(){
    let var1= parseFloat(document.getElementById('velocidad-inicial-1').value);
    let var2=parseFloat(document.getElementById('aceleracion-1').value);
    let var3=parseFloat(document.getElementById('tiempo-1').value);


    if (isNaN(var1) || isNaN(var2) || isNaN(var3) ) {
        document.getElementById('respuesta-1').innerHTML = "Ingresa valores numéricos válidos.";
        alert("Ingresa valores numéricos válidos.");
    } else {
        let resultado = (var1 + (var2*var3));
        document.getElementById('respuesta-1').innerHTML = `La velocidad final es ${resultado.toFixed(2)}`;
       
    }

}

function limpiar_2(){
    document.getElementById("velocidad-inicial-2").value="";
    document.getElementById("velocidad-final-1").value="";
    document.getElementById("tiempo-2").value="";
    document.getElementById("respuesta-2").innerHTML="";
}

function frdistanciasinaceleracion(){
    let var1= parseFloat(document.getElementById('velocidad-inicial-2').value);
    let var2=parseFloat(document.getElementById('velocidad-final-1').value);
    let var3=parseFloat(document.getElementById('tiempo-2').value);


    if (isNaN(var1) || isNaN(var2) || isNaN(var3) ) {
        document.getElementById('respuesta-2').innerHTML = "Ingresa valores numéricos válidos.";
        alert("Ingresa valores numéricos válidos.");
    } else {
        let resultado = (((var1 + var2)/2)*var3);
        document.getElementById('respuesta-2').innerHTML = `La velocidad final es ${resultado.toFixed(2)}`;
       
    }

}

function limpiar_3(){
    document.getElementById("velocidad-inicial-3").value="";
    document.getElementById("aceleracion-2").value="";
    document.getElementById("tiempo-3").value="";
    document.getElementById("respuesta-3").innerHTML="";
}

function frsinvelocidadfinal(){
    let var1= parseFloat(document.getElementById('velocidad-inicial-3').value);
    let var2= parseFloat(document.getElementById('aceleracion-2'))
    let var3= parseFloat(document.getElementById('tiempo-3'))

}

function frsinvelocidadfinal() {
    let var1 = parseFloat(document.getElementById('velocidad-inicial-3').value);
    let var2 = parseFloat(document.getElementById('aceleracion-2').value); 
    let var3 = parseFloat(document.getElementById('tiempo-3').value); 

    if (isNaN(var1) || isNaN(var2) || isNaN(var3)) {
        document.getElementById('respuesta-3').innerHTML = "Ingresa valores numéricos válidos.";
        alert("Ingresa valores numéricos válidos.");
    } else {
        let resultado = (var1 * var3) + (((var2 * (var3 ** 2))) / 2);
        document.getElementById('respuesta-3').innerHTML = `La velocidad final es ${resultado.toFixed(2)}`;
    }
}

function limpiar_4(){
    document.getElementById("velocidad-inicial-4").value="";
    document.getElementById("aceleracion-3").value="";
    document.getElementById("distancia-1").value="";
    document.getElementById("respuesta-3").innerHTML="";
}

function frsintiempo(){
    let var1= parseFloat(document.getElementById('velocidad-inicial-4').value);
    let var2= parseFloat(document.getElementById('aceleracion-3').value)
    let var3= parseFloat(document.getElementById('distancia-1').value)

    if (isNaN(var1) || isNaN(var2) || isNaN(var3)) {
        document.getElementById('respuesta-4').innerHTML = "Ingresa valores numéricos válidos.";
        alert("Ingresa valores numéricos válidos.");
    } else {
        let resultado = (var1**2)+(2*(var2*var3));
        document.getElementById('respuesta-4').innerHTML = `La velocidad final es ${resultado.toFixed(2)}`;
    }
}

function limpiar_5(){
    document.getElementById("velocidad-final-2").value="";
    document.getElementById("velocidad-inicial-5").value="";
    document.getElementById("tiempo-4").value="";
    document.getElementById("respuesta-5").innerHTML="";
}

function fraceleracion(){
    let var1= parseFloat(document.getElementById('velocidad-final-2').value);
    let var2= parseFloat(document.getElementById('velocidad-inicial-5').value)
    let var3= parseFloat(document.getElementById('tiempo-4').value)

    if (isNaN(var1) || isNaN(var2) || isNaN(var3)) {
        document.getElementById('respuesta-5').innerHTML = "Ingresa valores numéricos válidos.";
        alert("Ingresa valores numéricos válidos.");
    } else {
        let resultado = ((var1-var2)/var3);
        document.getElementById('respuesta-5').innerHTML = `La velocidad final es ${resultado.toFixed(2)}`;
    }
}