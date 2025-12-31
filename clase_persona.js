class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
    }
    cumpleanios(){
        this.edad += 1;
        console.log(`Feliz cumpleaños ahora tiens ${this.edad} años`);
    }
}

const juan = new Persona("Juan", 25);
const maria = new Persona("Maria", 30);

juan.saludar();
maria.cumpleanios();