const persona = {
    nombre: "Carlos",
    edad: 45,
    pais: "Chile"
};

console.log(persona.nombre);
console.log(persona["pais"]);
persona.edad = 36;
console.log(persona.edad);
persona.profesion = "Programador";
console.log(persona.profesion);


const usuario = {
    nombre: "Maria",
    edad: 24,
    saludar: function(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
};

usuario.saludar();

const producto = {
    nombre: "laptop",
    precio: 4500,
    mostrarPrecio(){
        console.log(`El precio de la ${this.nombre} es ${this.precio}`);
    }
};

producto.mostrarPrecio();