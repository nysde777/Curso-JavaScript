const obtenerMensaje = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const exito = true;
            if(exito){
                resolve("todo salio bien");
            }else{
                reject("Algo salio mal");
            }
        },1000);
    });
};

obtenerMensaje()
    .then((resultado) =>{
        console.log(resultado);
    })
    .catch((error) =>{
        console.log(error);
    })
