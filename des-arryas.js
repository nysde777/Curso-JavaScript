const colores = ["rojo","verde","azul"];
const [colorPrimario,colorSecundario,colorTerciario] = colores;
console.log(colorPrimario)
console.log(colorSecundario)

const numeros3 = [10,20,30,40]
const [primero, ,tercero] = numeros3
console.log(primero)

const configuracion = ["dark"];
const[tema,idioma="español"] = configuracion
console.log(tema)
console.log(idioma)

const valores = [1,2,3,4,5]
const [primerValor, ...restoValores] = valores
console.log(primerValor)
console.log(restoValores)