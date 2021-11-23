var estudiante = ["Juan", "Pedro", "Alanis", "Pablo","Ivan"];

function saludarEstudiante(estudiantes){
    console.log(`Hola ${estudiantes}`);
}

for (var i of estudiante){
    saludarEstudiante(i);
}