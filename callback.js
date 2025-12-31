const decirHola = (callback) => {
    callback();
}
const hola = () =>{
    console.log("soy un callback");
}


decirHola(hola);