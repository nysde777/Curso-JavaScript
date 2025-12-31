const objetoJs = {
    nombre: "carlos",
    rol: "Hacker"
}

const jsonString = '{"nombre":"Carlos","rol":"programador"}'

//Json.parse()
const responseApi = '{"id":1, "nombre":"Juan","activo":true}';
const usuario = JSON.parse(responseApi);
console.log(usuario.id)
console.log(usuario.nombre)
console.log(usuario.activo)

//json.stringfy()
const usuario2 = {
    id:10,
    nombre: "Juanito Perez",
    activo: false
}

const usuarioJson= JSON.stringify(usuario2, null, 2)
console.log(usuarioJson)