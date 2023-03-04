//Selecciono el elemento sobre el que se lleva a cabo el evento
const container=document.querySelector("main");
//selleciono el elemento sobre el que se imprime los cambios
const span=document.querySelector("span");
//inicio un contador
let contador=0;

//event delegation. Se delega en un contenedor superior.

container.addEventListener('click', (e)=> {
    //preguntamos si el elemento contiene determinada clase. Ojo que va sin el punto xq ya preguntamos por la clase
  if(e.target.classList.contains("aumentar")){
    contador++;
    span.textContent=contador;
  }
  if(e.target.classList.contains("disminuir")){
    contador--;
    span.textContent=contador;
    e.stopPropagation();
  }
})


// //funcion event click
// btnAumento.addEventListener('click', () =>{
//     contador++
//     //imprimo los cambios en el elemento seleccionado
//     span.textContent= contador;
// })
// //Selecciono el elemento sobre el que se lleva a cabo el evento
// const btnDisminuir=document.querySelector(".disminuir");
// //funcion event click disminuir
// btnDisminuir.addEventListener('click',()=>{
//     contador--;
//     //imprimo los cambios en el elemento seleccionado
//     span.textContent=contador;
// })