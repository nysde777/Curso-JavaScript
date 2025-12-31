const mensajeGlobal = "Saludo desde la variable Global";
const mostrar = () => {
    const mensajeLocal = "Hola desde Local";
    console.log(mensajeGlobal);
    console.log(mensajeLocal);
}

console.log(mensajeGlobal);
console.log(mensajeLocal);