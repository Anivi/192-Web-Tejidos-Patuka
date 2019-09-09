
    window.addEventListener('scroll', navFijo);
    var barra = document.querySelector('.barra');

    function navFijo()
    {
        console.log(scrollY);
        if(scrollY >= 1){
        barra.style.position= 'fixed';
        
        }
    }
  
