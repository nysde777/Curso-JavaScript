
const usuario = {
    nombre: "juan",
    rol: "programador",
    activo: true
}

const {nombre, rol, activo} = usuario
console.log(nombre)
console.log(rol)
console.log(activo)

const settings = {
    timeout: 5000,
    retries: 3
}

const { timeout: tiempoMaximo, retries: reintentos} = settings
console.log(tiempoMaximo)
console.log(reintentos)