var carros=[];

function auto(marca, modelo, anho){
    this.marca=marca;
    this.modelo=modelo;
    this.anho= anho;
}

for(var i=0;i<30;i++){
    carros.push(new auto("Tesla","Model 3", 2020));
}

console.log(carros);