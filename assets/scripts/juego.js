//Funcion para el cronometro
let tiempo;
let contadorM = 0;
let contadorS = 1;

//Empezar el cronometro
function empiezaElCronometro() {
  const minutos = document.getElementById("minutos");
  const segundos = document.getElementById("segundos");
  tiempo = setInterval(function () {
    if (contadorS == 60) {
      contadorS = 0;
      contadorM++;
      minutos.innerHTML = contadorM;
      if (contadorM == 60) {
        contadorM = 0;
      }
    }
    if (contadorS < 10) {
      segundos.innerHTML = "0" + contadorS;
    } else {
      segundos.innerHTML = contadorS;
    }
    contadorS++;
  }, 1000);
}
//Detener el crometro
function detieneElCronometro() {
    clearInterval(tiempo);
}

//Traer la imagen correcta
const imgCorrecta = document.getElementById("0");
//Traer todas las imagenes
const imgs = document.querySelectorAll(".img");
//Tachar las imagenes seleccionadas
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", tachar);
}
//Funcion para tachar
function tachar(e) {
  let img = e.target;
  //Doble click para saber si es la correcta
  if (img.classList == "img tachar") {
    puntajeJuego(e);
  } else {
    img.className = "img tachar";
  }
}

//Funcion para el puntaje del juego
let espacioDePuntos = document.getElementById("puntaje");
let puntos = 5;
function puntajeJuego(e) {
  const minutos = document.getElementById("minutos").innerText;
  const segundos = document.getElementById("segundos").innerText;
  let img = e.target;
  if (e.target == imgCorrecta) {
    img.className = "img tachar correcta";
    console.log(puntos);
    puntos += 5; //Suma 5 puntos por ganar;
    console.log(puntos);
    detieneElCronometro();
    puntos = puntos + puntosPorTiempo();
    console.log(puntos);
    Swal.fire({
      icon: "success",
      title: "Ganaste!!",
      text: `Tu puntuación es de ${puntos} y tu tiempo es de ${minutos}:${segundos}, ¿Quieres reiniciar?`,
    }).then((result) => {
      if (result.isConfirmed) {
        location.reload();
      }
    });
  } else {
    img.className = "img tachar incorrecta";
    if (puntos == 1) {
      Swal.fire({
        icon: "question",
        title: "Perdiste",
        text: "Llegaste a 0, ¿Quieres reiniciar?",
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }else{
          location.reload();
        }
      });
    } else {
      puntos = puntos - 1;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `No es la persona, Tu puntaje ahora es ${puntos}`,
      });
      espacioDePuntos.innerText = puntos;
    }
  }
}

//Funcion de puntos por tiempo
function puntosPorTiempo() {
  const minutos = document.getElementById("minutos").innerText;
  if (minutos <= 2) return 5;
  if (minutos > 2 && minutos <= 4) return 4;
  if (minutos > 4 && minutos <= 6) return 3;
  if (minutos > 6 && minutos <= 8) return 2;
  if (minutos > 8)  return 1;
}
//Reiniciar
const reiniciar = document.getElementById('reiniciar').addEventListener("click",()=>{location.reload()});