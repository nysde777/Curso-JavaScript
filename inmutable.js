let numero = 10;
numero = numero + 5;
console.log(numero);

const numero2 = 100;


const persona = Object.freeze({
    nombre: "Maria",
    edad: 23
})

console.log(persona);
persona.nombre = "Juana";
console.log(persona);

// Funciones Puras---------------------------
const sumar = (num1, num2) => {
    return num1 + num2
}

let total = 0;
const sumarNoPura = (num1, num2) => {
    total = total + num1 + num2;
}