// BASE DE DATOS DE TUS OBRAS

console.log("JS cargado");

const obras = {
    1: {
        titulo: "mi perro",
        imagen: "object/image/lisa.jpg",
        descripcion: "un perro"
    },

    2: {
        titulo: "una montaña",
        imagen: "object/image/mountain2.jpg",
        descripcion: ""
    },
    3: {
        titulo: "una montaña",
        imagen: "object/image/hill.jpg",
        descripcion: ""
    },
    4: {
        titulo: "una montaña",
        imagen: "object/image/lisa.jpg",
        descripcion: ""
    }
};



// LEER EL ID DE LA URL
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");


// BUSCAR LA OBRA
const obra = obras[id];


const contenedor = document.getElementById("contenedorObra");

if (obra) {

    contenedor.innerHTML = `
        <article class="postBlog">

            <h1 class="post-titulo{">${obra.titulo}</h1>

            <img style="width:500px; height:400px; object-fit:cover;" class="imagenObra" src="${obra.imagen}" alt="${obra.titulo}">

            <p class="descripcionObra">
                ${obra.descripcion}
            </p>

        </article>
    `;

} else {

    contenedor.innerHTML = `
        <h1>La obra no existe </h1>
        <p>Probablemente el link está mal.</p>
    `;
}
