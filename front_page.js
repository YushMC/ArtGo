let imagenes = [
    "https://ethic.es/wp-content/uploads/2022/12/vangog-2.jpg",
    "https://uvp.mx/uvpblog/wp-content/uploads/2021/07/Artes-Visuales.jpg",
    "https://www.anahuac.mx/veracruz/sites/default/files/2017-12/exposicion-arte-cultura-2107_01.jpg",
    "https://media.admagazine.com/photos/618a69ee90c4ec9a52ca1264/3:2/w_2250,h_1500,c_limit/71578.jpg",
    "https://veracruz.uo.edu.mx/sites/default/files/gdi/cosas-que-te-hacen-dudar-del-arte-contemporaneo-picasso-h600_0.jpg"
];

let indiceImagen = 0;
let intervaloTiempo = 3000;

function cambiarImagenDeFondo() {
    let miDiv = document.getElementById("front_page_change");
    let nuevaImagen = new Image();

    nuevaImagen.onload = function(){
        miDiv.style.backgroundImage = "url('" + imagenes[indiceImagen] + "')";
    }
    nuevaImagen.src = imagenes[indiceImagen];

    // Incrementar el índice para la próxima imagen
    indiceImagen++;
    // Si llegamos al final de la lista de imágenes, volvemos al principio
    if (indiceImagen === imagenes.length) {
        indiceImagen = 0;
    }
}

// Llamar a la función para cambiar la imagen de fondo cada intervalo de tiempo
cambiarImagenDeFondo(); // Cambiar la imagen de fondo inicialmente
setInterval(cambiarImagenDeFondo, intervaloTiempo);