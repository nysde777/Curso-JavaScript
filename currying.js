const hacerCafe = (leche) => (tamaño) => (azucar) => {
    return `Cafe ${tamaño}, ${leche}, ${azucar}`;
}

const conLeche = hacerCafe('Con Leche');

console.log(conLeche("grande") ("Con azucar"));
console.log(conLeche("chico") ("sin azucar"));

const sumar = (a) => (b) => {
    return a + b;
}

console.log(sumar(2)(3));


const conDescuento= (porcentaje) => (precio) => {
    return precio - (precio * porcentaje / 100);
}

const descuento10 = conDescuento(10);
const descuento20 = conDescuento(20);

console.log(descuento10(100));
console.log(descuento20(100));
