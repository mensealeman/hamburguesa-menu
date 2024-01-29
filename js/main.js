// Guarda en variables const el menu nav, el botón abrir y cerrar
const nav = document.querySelector("#nav");  
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


//En la variable "abrir" usa el método addEventListener para llamar a la función flecha "add" que añade el menu nav haciendo click. Hace que sea visible.
abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

//En la variable "cerrar" usa el método addEventListener para llamar a la función flecha "remove" que elimina el menu nav haciendo click. Hace que sea no sea visible.
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})