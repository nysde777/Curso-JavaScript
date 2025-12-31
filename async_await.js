function pedirPizza(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const exito = false; 
        
        if(exito){
            resolve("aqui esta tu pizza");
        }else{
            reject("lo siento no hay ingredientes")
        }
    }, 2000)
    })
}



async function ordenarPizza(){
    console.log("paso 1 llamando a la pizzeria")
    try {
        const resultado = await pedirPizza();
        console.log("paso 2", resultado)
    }catch(error){
        console.log("Paso 2 error", error);
    }
    console.log("Paso 3 ya termine todo")
}
ordenarPizza()
console.log("Esto se ejecuta inmediantamente");