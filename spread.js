const numeros = [1,2,3]
const copiaNumeros = [...numeros]
console.log(copiaNumeros)

const frontend = ["html", "css"]
const banckend = ["node", "base de datos"]
const stackCompleto = [...frontend, ...banckend]
console.log(stackCompleto)

const numerosBase = [1,2,4]
const numerosCompletos = [1,2,3,...numerosBase.slice(2)]
console.log(numerosCompletos)

//spread con objetos
const usuario = {
    nombre: "Maria",
    rol: "Programador"
}

const copiaUsuario = {...usuario}
console.log(copiaUsuario)

const datosExtra = {
    rol: "Senior",
    experiencia: 5
}

const perfilCompleto = {
    ...usuario,
    ...datosExtra
}
console.log(perfilCompleto)

const configuracion = {
    idioma: "es",
    modo: "ligth"
}
const nuevaConfiguracion = {
    ...configuracion,
    modo:"dark"
}

console.log(nuevaConfiguracion)