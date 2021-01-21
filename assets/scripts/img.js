//Traer las filas para las imagenes
const fila1 = document.getElementById("fila1");
const fila2 = document.getElementById("fila2");
const fila3 = document.getElementById("fila3");
const fila4 = document.getElementById("fila4");

//Crear un array con número aleatorios
//Variables
let array = []; // Arreglo para llenar
let cantidadNumeros = 8; // Cantidad de números en el arreglo
let hasta = 8; // Máximo valor de los números en el arreglo
//Funcion
function llenarAleatorios(array) {
  let v = Math.floor(Math.random() * hasta);
  if (
    !array.some(function (e) {
      return e == v;
    })
  ) {
    /**
     * Si no se encuentra el valor aleatorio en el arreglo
     * se pushea el valor.
     */
    array.push(v);
  }
}

/**
 * Bucle para llenar el arreglo con la cantidad que necesites
 */
while (array.length < cantidadNumeros && cantidadNumeros == hasta) {
  llenarAleatorios(array);
}

//Darle un id de valor 0 a la imagen correcta y 1 a las incorrectas
function id(array) {
  if(array==1){
      return 0;
  }else{
      return 1;
  }
}

for (let i = 0; i < 8; i++) {
  if (i < 2) {
    fila1.innerHTML = `<img src="../img/img${array[0]}.png" alt="" class="img" id="${id(array[0])}">
                           <img src="../img/img${array[1]}.png" alt="" class="img" id="${id(array[1])}">`;
  }
  if (i > 2 && i < 4) {
    fila2.innerHTML = `<img src="../img/img${array[2]}.png" alt="" class="img" id="${id(array[2])}"> 
                           <img src="../img/img${array[3]}.png" alt="" class="img" id="${id(array[3])}">`;
  }
  if (i > 4 && i < 6) {
    fila3.innerHTML = `<img src="../img/img${array[4]}.png" alt="" class="img" id="${id(array[4])}"> 
                           <img src="../img/img${array[5]}.png" alt="" class="img" id="${id(array[5])}">`;
  }
  if (i > 6) {
    fila4.innerHTML = `<img src="../img/img${array[6]}.png" alt="" class="img" id="${id(array[6])}"> 
                           <img src="../img/img${array[7]}.png" alt="" class="img" id="${id(array[7])}">`;
  }
}
