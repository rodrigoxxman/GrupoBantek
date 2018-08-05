/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
var scroll = new SmoothScroll('a[href*="#"]', {
// Selectors
ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
header: null, // Selector for fixed headers (must be a valid CSS selector)

speed: 1050, // Integer. How fast to complete the scroll in milliseconds
offset: 85

});
/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
$(window).scroll(function () {

    var nav = $('.encabezado');
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        nav.addClass("fondo-menu");
    } else {
        nav.removeClass("fondo-menu");
    }
});

