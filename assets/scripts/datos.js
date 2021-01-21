//DOM
const nombre = document.getElementById("perfilNombre");
//Capturar datos del localstorage y agregarlos
nombre.innerText = localStorage.getItem("nombre");
