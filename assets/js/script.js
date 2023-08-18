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
  
  document.addEventListener('DOMContentLoaded', function() {
    const opcionTodos = document.getElementById('opcionTodos');
    const opcionDestacados = document.getElementById('opcionDestacados');
    const opcionNoDestacados = document.getElementById('opcionNoDestacados');
    const opcionNombre = document.getElementById('opcionNombre');
    const opcionRegion = document.getElementById('opcionRegion');
    const opcionEstado = document.getElementById('opcionEstado');

    const seccionDestacados = document.getElementById('seccionDestacados');
    const seccionNoDestacados = document.getElementById('seccionNoDestacados');
    const seccionEntradas = document.getElementById('seccionEntradas');

    const seccionDestacadosRegion = document.getElementById('seccionDestacadosRegion');
    const seccionNoDestacadosRegion = document.getElementById('seccionNoDestacadosRegion');
    const seccionEntradasRegion = document.getElementById('seccionEntradasRegion');

    const seccionDestacadosEstado = document.getElementById('seccionDestacadosEstados');
    const seccionNoDestacadosEstado = document.getElementById('seccionNoDestacadosEstados');
    const seccionEntradasEstados = document.getElementById('seccionEntradasEstados');

    function cambiarSecciones(seccionMostrar, seccionOcultar) {
      seccionMostrar.style.display = 'block';
      seccionOcultar.style.display = 'none';
    }

    function noneSecciones() {
      seccionDestacados.style.display = 'none';
      seccionNoDestacados.style.display = 'none';
      seccionEntradas.style.display = 'none';
      seccionEntradasRegion.style.display = 'none';
      seccionEntradasEstados.style.display = 'none';
      seccionNoDestacadosRegion.style.display = 'none';
      seccionNoDestacadosEstado.style.display = 'none';
      seccionDestacadosEstado.style.display = 'none';
      seccionDestacadosRegion.style.display = 'none';
    }

    opcionTodos.addEventListener('click', function() {
      if (seccionDestacados.style.display === 'block') {
        cambiarSecciones(seccionEntradas, seccionDestacados);
      } else if (seccionNoDestacados.style.display === 'block') {
        cambiarSecciones(seccionEntradas, seccionNoDestacados);
      } else if (seccionNoDestacadosRegion.style.display === 'block') {
        cambiarSecciones(seccionEntradasRegion, seccionNoDestacadosRegion);
      } else if (seccionDestacadosRegion.style.display === 'block') {
        cambiarSecciones(seccionEntradasRegion, seccionDestacadosRegion);
      } else if (seccionNoDestacadosEstado.style.display === 'block') {
        cambiarSecciones(seccionEntradasEstados, seccionNoDestacadosEstado);
      } else if (seccionDestacadosEstado.style.display === 'block') {
        cambiarSecciones(seccionEntradasEstados, seccionDestacadosEstado);
      }
    });

    opcionDestacados.addEventListener('click', function() {
      if (seccionNoDestacados.style.display === 'block') {
        cambiarSecciones(seccionDestacados, seccionNoDestacados);
      } else if (seccionEntradasEstados.style.display === 'block') {
        cambiarSecciones(seccionDestacadosEstado, seccionEntradasEstados);
      } else if (seccionEntradasRegion.style.display === 'block') {
        cambiarSecciones(seccionDestacadosRegion, seccionEntradasRegion);
      } else if (seccionNoDestacadosRegion.style.display === 'block') {
        cambiarSecciones(seccionDestacadosRegion, seccionNoDestacadosRegion);
      } else if (seccionNoDestacadosEstado.style.display === 'block') {
        cambiarSecciones(seccionDestacadosEstado, seccionNoDestacadosEstado);
      } else if (seccionDestacadosRegion.style.display === 'block') {
        seccionDestacadosRegion.style.display === 'block';
      } else if (seccionDestacadosEstado.style.display === 'block') {
        seccionDestacadosEstado.style.display === 'block';
      } else{
        cambiarSecciones(seccionDestacados, seccionEntradas);
      }
    });

    opcionNoDestacados.addEventListener('click', function() {
      if (seccionDestacados.style.display === 'block') {
        cambiarSecciones(seccionNoDestacados, seccionDestacados);
      } else if (seccionEntradasEstados.style.display === 'block') {
        cambiarSecciones(seccionNoDestacadosEstado, seccionEntradasEstados);
      } else if (seccionEntradasRegion.style.display === 'block') {
        cambiarSecciones(seccionNoDestacadosRegion, seccionEntradasRegion);
      } else if (seccionDestacadosRegion.style.display === 'block') {
        cambiarSecciones(seccionNoDestacadosRegion, seccionDestacadosRegion);
      } else if (seccionDestacadosEstado.style.display === 'block') {
        cambiarSecciones(seccionNoDestacadosEstado, seccionDestacadosEstado);
      } else if (seccionNoDestacadosEstado.style.display === 'block') {
        seccionNoDestacadosEstado.style.display === 'block';
      } else if (seccionNoDestacadosRegion.style.display === 'block') {
        seccionNoDestacadosRegion.style.display === 'block';
      } else{
        cambiarSecciones(seccionNoDestacados, seccionEntradas);
      }
    });

    opcionNombre.addEventListener('click', function() {
      noneSecciones();
      var dropdownElement = document.getElementById('navbarDropdownEntradas');
      var dropdownValue = dropdownElement.textContent.trim();

      if (dropdownValue === 'Destacados') {
        seccionDestacados.style.display = 'block';
      } else if (dropdownValue === 'No destacados') {
        seccionNoDestacados.style.display = 'block';
      } else {
        seccionEntradas.style.display = 'block';
      } 
    });

    opcionRegion.addEventListener('click', function() {
      noneSecciones();
      var dropdownElement = document.getElementById('navbarDropdownEntradas');
      var dropdownValue = dropdownElement.textContent.trim();

      if (dropdownValue === 'Destacados') {
        seccionDestacadosRegion.style.display = 'block';
      } else if (dropdownValue === 'No destacados') {
        seccionNoDestacadosRegion.style.display = 'block';
      } else {
        seccionEntradasRegion.style.display = 'block';
      } 
    });

    opcionEstado.addEventListener('click', function() {
      noneSecciones();
      var dropdownElement = document.getElementById('navbarDropdownEntradas');
      var dropdownValue = dropdownElement.textContent.trim();

      if (dropdownValue === 'Destacados') {
        seccionDestacadosEstado.style.display = 'block';
      } else if (dropdownValue === 'No destacados') {
        seccionNoDestacadosEstado.style.display = 'block';
      } else {
        seccionEntradasEstados.style.display = 'block';
      } 
    });
 });
})(jQuery);