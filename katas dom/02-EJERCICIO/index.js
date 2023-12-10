/* 1.1 Inserta dinamicamente en un html un div vacio con javascript. */
/* const createDiv = document.createElement("div");
document.body.appendChild(createDiv) */

/* 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */

/* const createDiv = document.createElement("div");
const createP = document.createElement("p");

createDiv.appendChild(createP)
document.body.appendChild(createDiv) */

/* 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript. */

/*     const createDiv = document.createElement("div");
    for (let i = 0; i < 6 ; i++) {
        const createP = document.createElement("p")
        createDiv.appendChild(createP)
    }
    document.body.appendChild(createDiv) */

    /* 1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'. */

   /*  const createP = document.createElement("p")
    createP.textContent = 'Soy dinámico!'
    document.body.appendChild(createP) */

   /*  1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */

   /* const h2 = document.querySelector(".fn-insert-here")
   h2.textContent = 'Wubba Lubba dub dub'
   document.body.appendChild(h2) */

   /* 1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array. */

/* const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul");

for (const element of apps) {
 const li = document.createElement("li");
 li.textContent = element;
 ul.appendChild(li);
}
document.body.appendChild(ul) */
/* 
1.7 Elimina todos los nodos que tengan la clase .fn-remove-me */

/* const element = document.querySelector(".fin-remove-me")
element.array.forEach(function(element) {
    element.remove();
}); */

/* 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */

/* const parrafo = document.createElement("p");
parrafo.textContent = "Voy en medio!";

const divAntes = document.getElementsByTagName("div")[0];
const divDespues = document.getElementsByTagName("div")[1];

if (divAntes && divDespues) {
    divAntes.parentNode.insertBefore(parrafo, divDespues);
} else {
    console.error("No se encontraron los elementos con la clase 'fn-insert-here'.");
} */

/* 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here */
   /*  const dentro = document.createElement("p");
    dentro.textContent = "Voy dentro!";
    const elementosInsertar = document.getElementsByClassName("fn-insert-here");

    for (let i = 0; i < elementosInsertar.length; i++) {
        const elemento = elementosInsertar[i]   
        elemento.appendChild(dentro.cloneNode(true));
    } */