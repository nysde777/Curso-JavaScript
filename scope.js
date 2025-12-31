// Scope global 
const pais = "Francia";

function mostrarPais(){
    console.log(pais);
}

mostrarPais();

// Scope funcion 
function saludar(){
    const mensaje = "hola";
    console.log(mensaje);
}

saludar();

// scope bloque
if (true){
    let edad = 45;
    const nombre = "pedro";
}
