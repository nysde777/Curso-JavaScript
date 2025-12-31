class Animal {
    constructor(nombre){
        this.nombre = nombre;
        this.energia = 10;
    }
    comer(){
        this.energia += 5;
        console.log(`${this.nombre} comio y su energia es ${this.energia}`); 
    }
    dormir(){
        this.energia = 10;
        console.log(`${this.nombre} dormio y recupero toda su energia`);
    }
}

class Perro extends Animal {
    constructor(nombre, raza){
        super(nombre);
        this.raza = raza;
    }
    ladrar(){
        console.log(`${this.nombre} dice: Guau Guau`);
    }
    comer(){
        this.energia += 8;
        console.log(`${this.nombre} comio mucho y su energia es ${this.energia}`);
    }
}

const miPerro = new Perro("Max", "Labrador")
miPerro.ladrar();
miPerro.comer();
miPerro.dormir();
console.log(miPerro.raza);