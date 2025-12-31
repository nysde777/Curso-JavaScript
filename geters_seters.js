class CuentaBancaria{
    #saldo = 0;
    constructor(titular, saldoInicial){
        this.titular = titular;
        this.#saldo = saldoInicial;
    }
    get saldo(){
        return this.#saldo;
    }
    set saldo(nuevoSaldo){
        if(nuevoSaldo < 0){
            console.log("Error el saldo no puede ser negativo");
            return;
        }
        this.#saldo += nuevoSaldo;
        console.log(`Nuevo saldo actualizado: ${this.#saldo}`);
    }   
}

const cuentaJuan = new CuentaBancaria("Juan", 1000);
console.log(cuentaJuan.saldo);
cuentaJuan.saldo = 400;
