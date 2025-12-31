const numeros = [10,20,30,40,50];
console.log(numeros);

//map 
const precios = [100,200,300];
const preciosConImpuestos = precios.map(precio =>{
    return precio * 1.13;
})

console.log(precios);
console.log(preciosConImpuestos);

//Filter()
const edades = [12,18,25,30,15];
const mayoresDeEdad = edades.filter(edad => {
    return edad >= 18;
})
console.log(edades)
console.log(mayoresDeEdad)

//reduce()
const montos = [50,100,150];
const total = montos.reduce((acumulador, monto) => {
    return acumulador + monto;
}, 0)

console.log(total)

//find()
const usuarios = [
    { id:1, nombre: "Ana"},
    { id:2, nombre: "Carlos"},
    { id:3, nombre: "Maria"}
]

const usuarioEncontrado = usuarios.find(usuario => {
    return usuario.id === 2;
})

console.log(usuarioEncontrado)

// some()
const numeros2 = [3,7,10,15];

const hayMayorADiez = numeros2.some(numero =>{
    return numero > 20;
})
console.log(hayMayorADiez)

//every()
const notas = [80,90,75,88];
const todosAprobados = notas.every(nota => {
    return nota >= 60;
})

console.log(todosAprobados);

