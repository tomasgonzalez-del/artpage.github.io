    let contador = 1;
    const fondos = [
    'object/image/mountain2.jpg',
        'object/image/hill.jpg',
        'object/image/lisa.jpg',
        'object/image/fondo.jpg',];



function mostrarFondo(){
    
    const caja = document.getElementById("caja");
    if(!caja) return;
    caja.style.backgroundImage = `url('${fondos[contador]}')`;

caja.style.backgroundSize = "cover";   // mejor que contain
    caja.style.backgroundRepeat = "no-repeat";
    caja.style.backgroundPosition = "center";

}

function cambiarFondo(){
    contador = (contador + 1) % fondos.length;
    mostrarFondo();
}

function anteriorFondo(){
    contador = (contador - 1 + fondos.length) % fondos.length;
    mostrarFondo();
}

document.addEventListener("DOMContentLoaded", mostrarFondo);