(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(700);
  });

  // headroom js
  $('.navigation').headroom();

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  $('.featured-post-slider').slick({
    dots: false,
    speed: 300,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  // Masonry
  $(document).ready(function () {
    $('.masonry-container').masonry({
      itemSelector: '.masonry-container > div',
      columnWidth: 1
    });
  });


  // instafeed
  if (($('#instafeed').length) !== 0) {
    var userId = $('#instafeed').attr('data-userId');
    var accessToken = $('#instafeed').attr('data-accessToken');
    var userFeed = new Instafeed({
      get: 'user',
      userId: userId,
      resolution: 'low_resolution',
      accessToken: accessToken,
      template: '<div class="instagram-post"><img class="img-fluid w-100" src="{{image}}" alt="instagram-image"><ul class="list-inline text-center"><li class="list-inline-item"><a href="{{link}}" target="_blank" class="text-white"><i class="ti-heart mr-2"></i>{{likes}}</a></li><li class="list-inline-item"><a href="{{link}}" target="_blank" class="text-white"><i class="ti-comments mr-2"></i>{{comments}}</a></li></ul></div>'
    });
    userFeed.run();
  }

  setTimeout(function () {
    $('.instagram-slider').slick({
      dots: false,
      speed: 300,
      autoplay: true,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  }, 2000);

  // article reading time
  $('article').each(function () {

    let _this = $(this);

    _this.readingTime({
      readingTimeTarget: _this.find('.eta'),
      remotePath: _this.attr('data-file'),
      remoteTarget: _this.attr('data-target')
    });
  });

  // directorio
  // Obtener los elementos li por sus IDs
  const opcionTodas = document.getElementById('opcionTodas');
  const opcionDestacados = document.getElementById('opcionDestacados');
  const opcionNoDestacados = document.getElementById('opcionNoDestacados');
  const opcionNombre = document.getElementById('opcionNombre');
  const opcionRegion = document.getElementById('opcionRegion');
  const opcionEstado = document.getElementById('opcionEstado');

  // Obtener las secciones por sus IDs
  const seccionDestacados = document.getElementById('seccionDestacados');
  const seccionNoDestacados = document.getElementById('seccionNoDestacados');
  const seccionEntradas = document.getElementById('seccionEntradas');

  const seccionDestacadosRegion = document.getElementById('seccionDestacadosRegion');
  const seccionNoDestacadosRegion = document.getElementById('seccionNoDestacadosRegion');
  const seccionEntradasRegion = document.getElementById('seccionEntradasRegion');

  const seccionDestacadosEstado = document.getElementById('seccionDestacadosEstados');
  const seccionNoDestacadosEstado = document.getElementById('seccionNoDestacadosEstados');
  const seccionEntradasEstados = document.getElementById('seccionEntradasEstados');

  opcionTodas.addEventListener('click', function() {
    if (seccionEntradas.style.display === 'block') {
      seccionEntradas.style.display = 'block';
      seccionDestacados.style.display = 'none';
      seccionNoDestacados.style.display = 'none';
      seccionDestacadosEstado.style.display = 'none';
      seccionDestacadosRegion.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionEntradasRegion.style.display = 'none';
      seccionEntradasEstados.style.display = 'none';
    } else if (seccionEntradasEstados.style.display === 'block') {
      seccionDestacadosEstado.style.display = 'none';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionEntradas.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionEntradasRegion.style.display = 'none';
      seccionEntradasEstados.style.display = 'block';
    } else if (seccionEntradasRegion.style.display === 'block') {
      seccionEntradasRegion.style.display = 'block';
      seccionDestacadosRegion.style.display = 'none';
      seccionEntradasEstados.style.display = 'none';
      seccionDestacadosEstado.style.display = 'none';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionEntradas.style.display = 'none';
    } else if (seccionNoDestacadosRegion.style.display === 'block') {
      seccionDestacadosRegion.style.display = 'none';
      seccionEntradasEstados.style.display = 'none';
      seccionDestacadosEstado.style.display = 'none';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionEntradas.style.display = 'none';
      seccionEntradasRegion.style.display = 'block';
    } else if (seccionDestacadosRegion.style.display === 'block') {
      seccionDestacadosRegion.style.display = 'none';
      seccionEntradasEstados.style.display = 'none';
      seccionDestacadosEstado.style.display = 'none';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionEntradas.style.display = 'none';
      seccionEntradasRegion.style.display = 'block';
    } else if (seccionNoDestacadosEstado.style.display === 'block') {
      seccionEntradasEstados.style.display = 'block';
      seccionDestacadosEstado.style.display = 'none';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionEntradas.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionEntradasRegion.style.display = 'none';
    } else if (seccionDestacadosEstado.style.display === 'block') {
      seccionEntradasEstados.style.display = 'block';
      seccionDestacadosEstado.style.display = 'none';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionEntradas.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionEntradasRegion.style.display = 'none';
    } else {
      seccionEntradas.style.display = 'block';
      seccionDestacados.style.display = 'none';
      seccionNoDestacados.style.display = 'none';
      seccionDestacadosEstado.style.display = 'none';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionEntradasEstados.style.display = 'none';
      seccionEntradasRegion.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
    }
  });

  opcionDestacados.addEventListener('click', function() {
    if (seccionEntradas.style.display === 'block') {
      seccionNoDestacados.style.display = 'none';
      seccionEntradasRegion.style.display = 'none';
      seccionEntradasEstados.style.display = 'none';
      seccionEntradas.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionDestacados.style.display = 'block';
    } else if (seccionEntradasEstados.style.display === 'block') {
      seccionEntradasEstados.style.display = 'none';
      seccionDestacadosEstado.style.display = 'block';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionEntradas.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionEntradasRegion.style.display = 'none';
    } else if (seccionEntradasRegion.style.display === 'block') {
      seccionEntradasRegion.style.display = 'none';
      seccionDestacadosRegion.style.display = 'block';
      seccionEntradasEstados.style.display = 'none';
      seccionDestacadosEstado.style.display = 'none';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionEntradas.style.display = 'none';
    } else if (seccionNoDestacadosRegion.style.display === 'block') {
      seccionEntradasRegion.style.display = 'none';
      seccionDestacadosRegion.style.display = 'block';
      seccionEntradasEstados.style.display = 'none';
      seccionDestacadosEstado.style.display = 'none';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionEntradas.style.display = 'none';
    } else if (seccionNoDestacadosEstado.style.display === 'block') {
      seccionEntradasEstados.style.display = 'none';
      seccionDestacadosEstado.style.display = 'block';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionEntradas.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionEntradasRegion.style.display = 'none';
    } else {
      seccionEntradas.style.display = 'none';
      seccionDestacados.style.display = 'block';
      seccionNoDestacados.style.display = 'none';
      seccionDestacadosEstado.style.display = 'none';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionEntradasEstados.style.display = 'none';
      seccionEntradasRegion.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
    }
  });

  opcionNoDestacados.addEventListener('click', function() {
    if (seccionEntradas.style.display === 'block') {
      seccionNoDestacados.style.display = 'block';
      seccionEntradasRegion.style.display = 'none';
      seccionEntradasEstados.style.display = 'none';
      seccionEntradas.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionDestacados.style.display = 'none';
    } else if (seccionEntradasEstados.style.display === 'block') {
      seccionNoDestacadosEstado.style.display = 'block';
      seccionEntradasEstados.style.display = 'none';
      seccionDestacadosEstado.style.display = 'none';
      seccionEntradas.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionEntradasRegion.style.display = 'none';
    } else if (seccionEntradasRegion.style.display === 'block') {
      seccionNoDestacadosRegion.style.display = 'block';
      seccionEntradasRegion.style.display = 'none';
      seccionDestacadosRegion.style.display = 'none';
      seccionEntradasEstados.style.display = 'none';
      seccionDestacadosEstado.style.display = 'none';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionEntradas.style.display = 'none';
    } else if (seccionDestacadosRegion.style.display === 'block') {
      seccionNoDestacadosRegion.style.display = 'block';
      seccionEntradasRegion.style.display = 'none';
      seccionDestacadosRegion.style.display = 'none';
      seccionEntradasEstados.style.display = 'none';
      seccionDestacadosEstado.style.display = 'none';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionEntradas.style.display = 'none';
    } else if (seccionDestacadosEstado.style.display === 'block') {
      seccionNoDestacadosEstado.style.display = 'block';
      seccionEntradasEstados.style.display = 'none';
      seccionDestacadosEstado.style.display = 'none';
      seccionEntradas.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionEntradasRegion.style.display = 'none';
    } else {
      seccionNoDestacadosRegion.style.display = 'none';
      seccionEntradas.style.display = 'none';
      seccionDestacados.style.display = 'none';
      seccionNoDestacados.style.display = 'block';
      seccionDestacadosEstado.style.display = 'none';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionEntradasEstados.style.display = 'none';
      seccionEntradasRegion.style.display = 'none';
      
    }
  });

  opcionNombre.addEventListener('click', function() {
    seccionDestacados.style.display = 'none';
    seccionNoDestacados.style.display = 'none';
    seccionEntradas.style.display = 'block';
    seccionEntradasRegion.style.display = 'none';
    seccionEntradasEstados.style.display = 'none';
    seccionNoDestacadosRegion.style.display = 'none';
    seccionNoDestacadosEstado.style.display = 'none';
    seccionDestacadosEstado.style.display = 'none';
    seccionDestacadosRegion.style.display = 'none';
  });

  opcionRegion.addEventListener('click', function() {
    seccionEntradasEstados.style.display = 'none';
    seccionDestacados.style.display = 'none';
    seccionNoDestacados.style.display = 'none';
    seccionEntradas.style.display = 'none';
    seccionNoDestacadosRegion.style.display = 'none';
    seccionNoDestacadosEstado.style.display = 'none';
    seccionEntradasRegion.style.display = 'block';
  });

  opcionEstado.addEventListener('click', function() {
    seccionDestacadosRegion.style.display = 'none';
    seccionDestacados.style.display = 'none';
    seccionNoDestacados.style.display = 'none';
    seccionEntradas.style.display = 'none';
    seccionEntradasRegion.style.display = 'none';
    seccionNoDestacadosRegion.style.display = 'none';
    seccionNoDestacadosEstado.style.display = 'none';
    seccionEntradasEstados.style.display = 'block';
  });
  seccionEntradasEstados.style.display = 'none'; // Ocultar la sección por defecto
  //Fin de directorio
})(jQuery);