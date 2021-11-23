var articulos = [
    {nombre:"TV",precio:5000},
    {nombre:"Laptop",precio:30000},
    {nombre:"Bici",precio:500},
    {nombre:"Libro",precio:130},
    {nombre:"Celular",precio:10000},
    {nombre:"Monitor",precio:3000},
    {nombre:"Teclado",precio:800},
    {nombre:"Laptop",precio:12},
]

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});
// console.log(encuentraArticulo);
//Ahora forEach para recorrer los arrays
/*
for(var i of articulos){
    console.log(i.nombre)
}

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})*/