// Encuentra el elemento con id=”intro”.
document.getElementById("demo").innerHTML = "Hola Mundo";
const elementoIntro = document.getElementById("intro");

// Cambia el elemento de una etiqueta <p>.
document.getElementById("p1").innerHTML = "¡Nuevo Texto!";

// Cambia el contenido de un elemento <h1>
const elementoTitulo = document.getElementById("titulo");
elementoTitulo.innerHTML = "Nuevo Encabezado";

// Búsqueda de elementos HTML por nombre de etiqueta.
const elementosP = document.getElementsByTagName("p");

// Encuentra el elemento con id=”main”
const main = document.getElementById("main");
console.log(main);
const mainP = main.getElementsByTagName("p");
console.log(mainP);

// Encontrar elementos por nombre de clases.
const elementosClaseIntro = document.getElementsByClassName("intro");
console.log(elementosClaseIntro);

// Búsqueda de elementos HTML mediante selectores de CSS.
const elementosPIntro = document.querySelectorAll("p.intro");
console.log(elementosPIntro);

// Encuentra los elementos <li> hijos de <ul>
const listItems = document.querySelectorAll("ul > li");
console.log(listItems);

// Encontrar en la consola e imprimir el elemento <h1>
const h1Element = document.querySelector("h1");
console.log(h1Element);

// Encontrar la clase list usando querySelector().
const list = document.querySelector(".list");
console.log(list);

// Imprimir los elementos <li> usando el ciclo forEach()
listItems.forEach((item) => {
    console.log(item);
});

// Uso de la propiedad style para cambiar estilos en línea CSS.
h1Element.style.color = "blue";

// Búsqueda de elementos HTML por colecciones de objetos HTML.
const form = document.forms["form1"];
let texto = "";
for (let i = 0; i < form.length; i++) {
    texto += form.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = texto;
console.log(form);

// Agregar nuevos elementos al documento HTML.
let lista = document.createElement("ul");
document.body.appendChild(lista);

let elemento1 = document.createElement("li");
elemento1.textContent = "Flor";
lista.appendChild(elemento1);

let elemento2 = document.createElement("li");
elemento2.textContent = "Jaguar";
lista.appendChild(elemento2);

// Usando el método addEventListener() para escuchar eventos en la página.
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    alert("Gracias por dar click");
});

// Validación de formulario.
function validarFormulario() {
    let x = document.forms["mi formulario"]["Nombre"].value;
    if (x == "") {
        alert("Se debe completar el nombre");
        return false;
    }
}

// Valida la entrada numérica.
function miFuncion() {
    let x = document.getElementById("numero").value;
    let texto;
    if (isNaN(x) || x < 10) {
        texto = "Entrada no válida";
    } else {
        texto = "Entrada correcta";
    }
    document.getElementById("dem").innerHTML = texto;
}

// Cambiar el valor de un atributo src de un elemento <img>
document.getElementById("miImagen").src = "descarga (1).jpeg";

// Agregar la hora actual a una etiqueta con id=”demo”.
document.getElementById("dem").innerHTML = "Fecha: " + Date();
