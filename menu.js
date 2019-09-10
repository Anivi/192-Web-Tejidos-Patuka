
    window.addEventListener('scroll', navFijo);
    var barra = document.querySelector('.barra');

    function navFijo()
    {
        console.log(scrollY);
        if(scrollY >= 1){
        barra.style.position= 'fixed';
        
        }
    }
/*
    function showText(){
        var text = document.getElementsByClassName('landing__carac-tex');
        text.style.opacity = "1"; 
    }
*/


    var fotos = document.querySelectorAll('.landing__galeria-foto');
    var fotoMostrar = document.querySelector('.landing__galeria-mostrar');
    
function recorrerFotos(foto, index){

    function clickFoto(event){
        var urlImg = foto.style.backgroundImage;
        var urlImgSplit = urlImg.split('/');

        var nombrePunto = urlImgSplit[urlImgSplit.length - 1].split('.');
        var nombre = nombrePunto[nombrePunto.length-2];

        fotoMostrar.style.backgroundImage = " url('./imagenes/" + nombre + ".png')";
        fotoMostrar.style.transition = "all ease-in 0.3s";
        console.log(nombre);

    }
    foto.addEventListener('click', clickFoto);
    
} fotos.forEach(recorrerFotos);


  //  console.log(url + "url de la imagen");