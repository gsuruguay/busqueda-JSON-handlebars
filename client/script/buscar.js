const btnBuscar = document.getElementById("btnBuscar");


btnBuscar.addEventListener("click", function() {
    const inputTitulo = document.getElementById("titulo").value;
    const inputArtista = document.getElementById("artista").value;
    const inputLanzamiento = document.getElementById("lanzamiento").value;
    let filtros = "";
    if(inputTitulo){
        filtros += "titulo=" + inputTitulo;
    }
    if(inputArtista){
        filtros += "&artista=" + inputArtista;
    }
    if(inputLanzamiento){
        filtros += "&lanzamiento=" + inputLanzamiento;
    }

    window.location.href = "/buscar?" + filtros
});