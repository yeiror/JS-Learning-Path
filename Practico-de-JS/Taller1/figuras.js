//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado *4;
} 

function areaCuadrado(lado){
    return lado**2;
}
console.groupEnd();

//Código del triángulo
 console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};

function areaTriangulo(base, altura){
    return (base*altura)/2;
};

console.groupEnd();

//Código del Círculo

console.group("Círculo");

function diametroCirculo(radio){
    return radio*2;
}
function perimetroCirculo(radio){
    return diametroCirculo(radio)*Math.PI.toFixed(2);
}
function areaCirculo(radio){
    return radio*radio*Math.PI.toFixed(2);
}

console.groupEnd();

//creamos funciones para los botones
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    alert("El perímetro es: " +perimetroCuadrado(input.value));
};

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    alert("El área es: "+ areaCuadrado(input.value));
}