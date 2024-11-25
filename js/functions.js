AOS.init();


$(document).ready(function () {


  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 49) {
      $('.navbar').addClass('header-fixed');
      $(".logo-img").attr("src", "img/logo-blanco.png");
 
    } else {
      $('.navbar').removeClass('header-fixed');
      $(".logo-img").attr("src", "img/logo.png");
 
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

    var telefono = '525582800356';
    var url = 'https://wa.me/' + telefono + '?text='
      + encodeURIComponent('Hola, me gustaría mas información a cerca de tus servicios, mi informción de contacto es: ' + correo + '\nMensaje: ' + comentarios);
    window.open(url);
  }

  $(".btn-send-info" ).on( "click", function() {
    sendInfoWhats();
  } );

  /*Carousel Clientes*/
  // Carousel 
  var jsonCarrusel1 = {
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
    },
    {
      "src": "img/clientes/cultura.png"
    }
    ]
  };

  var jsonCarrusel2 = {
    "clientes": [
    {
      "src": "img/clientes/fgr.png"
    },
    {
      "src": "img/clientes/mora.png"
    },
    {
      "src": "img/clientes/colliers.png"
    },
    {
      "src": "img/clientes/tja.png"
    },
    {
      "src": "img/clientes/cide.png"
    },
    {
      "src": "img/clientes/tlalnepantla.png"
    },
    {
      "src": "img/clientes/casa.png"
    }
    ]
  };

  var clientes1 = jsonCarrusel1.clientes;

  new Vue({
    el: '#carouselGrupo1',
    data: {
      slides: clientes1,
    },

    components: {
      'carousel-3d': Carousel3d.Carousel3d,
      'slide': Carousel3d.Slide
    },

  });

  var clientes2 = jsonCarrusel2.clientes;

  new Vue({
    el: '#carouselGrupo2',
    data: {
      slides: clientes2,
    },

    components: {
      'carousel-3d': Carousel3d.Carousel3d,
      'slide': Carousel3d.Slide
    },

  });










});




