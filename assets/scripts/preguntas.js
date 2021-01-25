const btnP1 = document.getElementById("btnP1");
const btnP2 = document.getElementById("btnP2");
const btnP3 = document.getElementById("btnP3");
const btnP4 = document.getElementById("btnP4");
const btnP5 = document.getElementById("btnP5");

btnP1.addEventListener("click", () => {
  Swal.fire("¿Tiene caso por su seguridad?", `No`, "question");
});
btnP2.addEventListener("click", () => {
  Swal.fire("¿Ayuda a prevenir dolencias?", `Si`, "question");
});
btnP3.addEventListener("click", () => {
  Swal.fire("¿Trabaja atendiendo gente?", `Si`, "question");
});
btnP4.addEventListener("click", () => {
  Swal.fire("¿Puede salvar vidas?", `Si`, "question");
});
btnP5.addEventListener("click", () => {
  Swal.fire("¿Viste ropa oscura?", `No`, "question");
});
