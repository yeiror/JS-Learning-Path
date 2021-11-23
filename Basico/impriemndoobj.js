var persona = {
    nombre:"Michael",
    apellido: "Jackson",
    edad: 22
}

function imprimirPersona(objPersona){
    Object.values(objPersona).forEach((elem) => {
        console.log(elem);
    })
};

imprimirPersona(persona);