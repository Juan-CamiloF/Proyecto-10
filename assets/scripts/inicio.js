const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const alertNombre = document.getElementById("alertNombre");
  if (nombre == "") {
    alertNombre.innerText = "Por favor llene este campo";
  }

  if (nombre != "") {
    localStorage.setItem("nombre", nombre);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Vamos a jugar!!',
        showConfirmButton: true,
        timer: 1500
      }).then((result)=>{
        if(result.isConfirmed){
            window.location = "./assets/html/juego.html";
        }else{
            window.location = "./assets/html/juego.html";
        }
      });
  }
});
