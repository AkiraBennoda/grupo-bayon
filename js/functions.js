$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 49) {
      $('.navbar').addClass('header-fixed');
      $('.navbar').removeClass('justify-content-lg-end');
      $('.navbar').addClass('justify-content-lg-center');
      $(".logo-img").attr("src", "img/logo.png");
 
    } else {
      $('.navbar').removeClass('header-fixed');
      $('.navbar').addClass('justify-content-lg-end');
      $('.navbar').removeClass('justify-content-lg-center');
 
    }
  });


//Logo
function checkScreenWidth() {
  var windowWidth = $(window).width();
  
  // Cambiar imagen si la resolución es de celular (menor a 768px)
  if (windowWidth <= 768) {
    $(".logo-img").attr("src", "img/logo-blanco.png");
  } else {
    $(".logo-img").attr("src", "img/logo.png");
  }
}

$(window).resize(function() {
  checkScreenWidth();
});

checkScreenWidth();



  /*Formulario*/
  function sendInfoWhats() {
    var correo = $("#correoCliente").val();
    var comentarios = $("#comentariosCliente").val();

    var telefono = '525511473986';
    var url = 'https://wa.me/' + telefono + '?text='
      + encodeURIComponent('Hola, me gustaría mas información a cerca de tus servicios, mi informción de contacto es: ' + correo + '\nMensaje: ' + comentarios);
    window.open(url);
  }

  /*Carousel Clientes*/
  // Carousel 
  var jsonCarrusel = {
    "clientes": [{
      "src": "img/clientes/sedena.png"
    },
    {
      "src": "img/clientes/conahcyt.png"
    },
    {
      "src": "img/clientes/sectur.png"
    },
    {
      "src": "img/clientes/oaxaca.png"
    },
    {
      "src": "img/clientes/gobcdmx.png"
    },
    {
      "src": "img/clientes/issste.png"
    },
    {
      "src": "img/clientes/queretaro.png"
    }
    ]
  };

  var clientes = jsonCarrusel.clientes;

  new Vue({
    el: '#carouselGrupo',
    data: {
      slides: clientes,
    },

    components: {
      'carousel-3d': Carousel3d.Carousel3d,
      'slide': Carousel3d.Slide
    },

  });











});




