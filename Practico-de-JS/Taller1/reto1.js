function validarTriangulo(lado1, lado2, base){
    if ((lado1>0)&&(lado1 === lado2)){
        alert("es isosceles");
        return true;
    }
    else{
        alert("No es isosceles");
        return false;
    }
}

function altura(lado1, lado2, base){
   
    if(validarTriangulo(lado1,lado2,base)===true){
        alert(Math.sqrt(lado1**2 - base**2/4));
    }
}

function CalcularAltura(){
    const lado1 = document.getElementById("InputLadoA");
    const lado2 = document.getElementById("InputLadoB");
    const base = document.getElementById("InputBase");

    altura(lado1.value, lado2.value, base.value);
}