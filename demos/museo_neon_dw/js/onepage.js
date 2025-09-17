// Inicializar WOW.js cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar WOW.js
    new WOW().init();
});



    // Mostrar el botón cuando se desplaza hacia abajo
    window.onscroll = function() {
        var scrollToTopBtn = document.getElementById("flechabtn");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Desplazarse hacia arriba cuando se hace clic en el botón
    function topFunction() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


/*Boton de whatsapp*/
document.querySelector('.btn-whatsapp').addEventListener('click', function(event) {
});