class Coche {
    constructor(color, marca){
        this.color = color;
        this.marca = marca;
        this.velocidad = 0;
    }
    acelerar(){
        console.log("El coche esta acelerando");
    }
    frenar(){
        console.log("El coche esta frenando");
    }
}

const miCoche = new Coche("Rojo", "Toyota");
const tuCoche = new Coche("Blanco", "Ford");

miCoche.acelerar();
miCoche.frenar();
