const crearContador = () => {
    let contador = 0;
    return () => {
        contador++;
        return contador;
    }
}

const miContador = crearContador();
console.log(miContador());
console.log(miContador());
console.log(miContador());