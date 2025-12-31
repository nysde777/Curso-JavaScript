const valores = [10,20,30,40]
const [primero, ...resto] = valores
console.log(primero)
console.log(resto)

const usuarioCompleto = {
    id: 1,
    nombre: "Juan",
    rol: "QA",
    activo: true
}

const {nombre, ...datosRestantes} = usuarioCompleto
console.log(nombre)
console.log(datosRestantes)

const sumar = (...numeros) => {
    return numeros.reduce((total, numero) =>{
        return total + numero;
    }, 0)
}
console.log(sumar(10,20))
console.log(sumar(100,200,300,400))