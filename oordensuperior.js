const usarFuncion = (funcion) => {
    funcion();
}

const hola = () => {
    console.log("Hola mundo de funciones");
}

usarFuncion(hola)


const crearHola = () => {
    return () => {
        console.log("Soy una funcion devuelta");
    }
}

const decirHola = crearHola()
decirHola();
