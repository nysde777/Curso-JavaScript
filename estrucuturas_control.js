// If Else

const edad = 17;

if (edad >= 18){
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// Switch
const dia = "viernes";
switch (dia){
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Fin de semana");
        break;
    default:
        console.log("Dia normal");
}


//For
for (let i = 1; i <= 5; i++){
    console.log("hola", i);
}


//while
let contador = 4;

while (contador <= 3) {
    console.log("Contador:",contador);
    contador ++;
}


// Do while
let numero = 5;

do {
    console.log("Numero:", numero)
    numero++;
} while (numero < 5);
