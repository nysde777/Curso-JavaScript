const titulo = document.getElementById("titulo");
console.log(titulo)

const titulo2 = document.querySelector("h1");
console.log(titulo2)

const parrafo = document.querySelector(".parrafo")
console.log(parrafo)

const boton = document.querySelector("#button")
console.log(boton)

const lista = document.querySelector("#lista")
console.log(lista)

titulo.textContent = "Nuevo titulo de la pagina";
titulo.innerHTML = "<em> Titulo en cursiva</em>";

boton.addEventListener("click", function(){
    alert("Hiciste clic en el boton")
    titulo.textContent = "Click detectado"
})