//seleccionamos el lugar donde va insertado el template
const tarjetas = document.querySelector(".tarjetas");
//creamos la lista que vamos a recorrer
const arrayEvent = data.events;
//creamos el fragment
const fragment = document.createDocumentFragment();
//seleccionamos el template que vamos a utilizar
const template = document.querySelector(".card").content;

//iniciamos el ciclo for para la lista creada
arrayEvent.forEach((item)=>{

    //seleccionamos los sectores del template y los modificamos al imprimir la información de la lista
    template.querySelector("img").src = item.image;
    template.querySelector(".cardtitulo").textContent=item.name;
    template.querySelector(".cardtxt p").textContent=item.description;
    template.querySelector("a").href="/details.html";
    template.querySelector("a").textContent="Más detalles";
    template.querySelector(".precio").textContent=item.price;
    template.querySelector(".place").textContent=item.place;

    //clonamos el template
    const clone = template.cloneNode(true);
    //empujamos el clone al fragment
    fragment.appendChild(clone);
});
//empujamos el fragment al lugar donde va insertado el template
tarjetas.appendChild(fragment);

