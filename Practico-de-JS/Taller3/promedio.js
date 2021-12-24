let lista =[];
let listado = document.getElementById("listado");
let dato = document.getElementById("numeroLista");
let resultado = document.getElementById("resultado");

function agregarLista(){
    
    lista.push(parseInt(dato.value));
    listado.innerText = `Tu lista lleva: ${lista.length} elementos si es correcto, presiona el botón 'Calcular promedio'`;
}

function limpiar(){
   
    lista = [];
    listado.innerText = `La lista está vacía`;
}

function calcularPromedio(){
    //let sumaLista = 0
    //for(let i=0;i< lista.length;i++){
    //    sumaLista+= lista[i];
    //}

    //También podemos utilizar el método reduce
    if(lista.length>=1){
    const sumaLista = lista.reduce(
        function (valorAcumulado, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );  
    promedio = sumaLista/lista.length
    resultado.innerText = `El promedio de la lista es: ${promedio}`;
    }
    else{
        resultado.innerText = `No hay ningun elemento en la lista`;
    }
}
