var articulos = [
    {nombre:"TV",precio:5000},
    {nombre:"Laptop",precio:30000},
    {nombre:"Bici",precio:500},
    {nombre:"Libro",precio:130},
    {nombre:"Celular",precio:10000},
    {nombre:"Monitor",precio:3000},
    {nombre:"Teclado",precio:800},
    {nombre:"Lápiz",precio:12},
]

var arcticuloFiltrado = articulos.filter(function (articulo){
    return articulo.precio<300
});

console.log(arcticuloFiltrado);