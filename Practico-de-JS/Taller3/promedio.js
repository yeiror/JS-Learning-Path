let lista =[];
let listado = document.getElementById("listado");
let dato = document.getElementById("numeroLista");
let resultado = document.getElementById("resultado");
let elementos = document.getElementById("contenedorLista");


function agregarLista(){
     
    if(dato.value != ""){
        elementos.innerText="Los números en la lista son:" ;
        lista.push(parseInt(dato.value));
        listado.innerText = `Tu lista lleva: ${lista.length} elementos si es correcto, presiona el botón 'Calcular promedio'`;
        
        lista.forEach(elemento=>{
            elementos.innerText+= "\n"+elemento  ;
        });

        elementos.style.display="inline";
    }
    else{
       console.log("introduce un número válido");
    }
    calcularPromedio();
  
       
}
function limpiar(){
   
    lista = [];
    listado.innerText = `La lista está vacía`;
    resultado.innerText = `No hay ningun elemento en la lista`;
    elementos.style.display="none";
}

function calcularPromedio(){
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


