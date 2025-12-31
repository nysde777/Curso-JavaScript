saludar();
function saludar(){
    console.log("Hola bienvenido a la funcion");
}

//funcion por expresion
const sumar = function(num1, num2){
    return num1 + num2;
}
console.log(sumar(10,20));

// Arrow functions
const multiplicar = (num1, num2) => {
    return num1 * num2;
}

console.log(multiplicar(2,4));




const restar = (num1, num2) => num1 - num2;
console.log(restar(10,5));