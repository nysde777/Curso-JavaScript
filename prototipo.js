const animal = {
    hablar(){
        console.log("hace un sonido");
    }
};

const perro = Object.create(animal);
perro.hablar();