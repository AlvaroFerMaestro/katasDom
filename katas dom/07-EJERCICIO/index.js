/* Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
 */

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nü menor"];

const printHereDiv = document.querySelector('[data-function="printHere"]');
const ul = document.createElement("ul");
printHereDiv.appendChild(ul);

for (const element of places) {
    const li = document.createElement("li")
    li.textContent = element;
    ul.appendChild(li);

}