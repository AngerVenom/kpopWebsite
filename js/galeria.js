document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
})

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 6; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        // funcion de mostrar imagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){

    const id = parseInt(e.target.dataset.imagenId);
    
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;
    

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    // cerrar imagen
    const cerrar = document.createElement('P')
    cerrar.textContent = 'X'
    cerrar.classList.add('btn-cerrar');
    // funcion de cerrar
    cerrar.onclick = function(){
        overlay.remove();
    }

    overlay.appendChild(cerrar);
    // mostrar en el html
    const body = document.querySelector('body');
    body.appendChild(overlay);
}