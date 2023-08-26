(function() {
    function displaySearchDirectorio(results, store) {
      var searchDirectorio = document.getElementById('search-results-directorio');
      var servicios_icons = {
        "Asesoría Personalizada de Viajes": "fas fa-comments",
        "Excursiones Locales": "fas fa-hiking",
        "Guía Turística": "fas fa-map",
        "Organización de Viajes": "fas fa-suitcase",
        "Organización de Viajes de Turismo": "fas fa-globe-americas",
        "Resolución de Incidencias": "fas fa-exclamation-circle",
        "Servicio de Reservación": "fas fa-calendar-check",
        "Traslados": "fas fa-car",
        "Venta de Boletos Aéreos Internacionales": "fas fa-plane-departure",
        "Venta de Boletos Aéreos Nacionales": "fas fa-plane",
        "Viajes Internacionales": "fas fa-globe",
        "Viajes Nacionales": "fas fa-flag"
      };
      if (results.length) { // Are there any results?
        var appendString = '';
        var iterador = 0;
        for (var i = 0; i < results.length; i++) {  // Iterate over the results
          var item = store[results[i].ref]; 
          if(item.types){
            var types_clean = item.types.replace(/&quot;/g, '"'); 
            var types_array = types_clean.slice(1, -1).split(',').map(function(item) {
              return item.trim();
            });
            var types = types_array.map(function(item) {
              return item.replace(/"/g, ''); 
            }).join(' - ');
          }
          iterador += 1;
          if (i % 2 === 0) {
            appendString += '<div class="row">';
          }
          appendString +='<div class="col-lg-6 col-sm-10">';
          appendString +='<div class="card card-separation">';
          if (item.featured === "true"){
            appendString +='<div class="card-body position-card">';
            appendString +='<ul class="nav nav-tabs">';
            appendString +='<li class="nav-item">';
            appendString +='<a class="nav-link active" data-toggle="tab" href="#tab1-directorio-'+iterador+'">'+"General"+'</a>';
            appendString +='</li>';
            appendString +='<li class="nav-item">';
            appendString +='<a class="nav-link" data-toggle="tab" href="#tab2-directorio-'+iterador+'">'+"Contacto"+'</a>';
            appendString +='</li>';
            appendString +='</ul>';
            appendString +='<div class="tab-content line-break">';
            appendString +='<div class="tab-pane fade show active" id="tab1-directorio-'+iterador+'">';
            appendString +='<div class="tab-card">';
            appendString +='<div class="tab-pane-card">';
            appendString +='<img src="'+item.image+'" alt="'+item.title+'" class="img-card">';
            appendString +='</div>';
            appendString +='<div class="tab-card-1">';
            appendString +='<div> <h5 class="text-dark">'+item.title+'</h5></div>';
            if (item.address){
              appendString +='<div class="smaller-font margin-icon"><i class="fas fa-map-marker-alt"></i> ';
              appendString +='<span class="margin-icon">'+item.address+'</span>';
              appendString +='</div>';
            }
            if(item.types){
              appendString +='<div class="smaller-font margin-icon"><i class="fas fa-building"></i>';
              appendString +='<span class="margin-icon-search">'+types+' </span>';
              appendString +='</div>';
            }
            if(item.services_extra){
              appendString +='<div class="smaller-font"><i class="fas fa-list"></i> '+item.services_extra+'</div>';
            }
            if(item.services){
              var servicios = JSON.parse(item.services.replace(/&quot;/g, '"'));
              appendString +='<ul class="horizontal-list">';
              for (var j = 0; j < servicios.length; j++) {
                if (servicios_icons[servicios[j]]){
                  appendString +='<li>';
                  appendString +='<i class="'+servicios_icons[servicios[j]]+'" data-toggle="tooltip" data-placement="top" title="'+servicios[j]+'"></i>';
                  appendString +='</li>';
                }
              }
              appendString +='</ul>';
            }
            appendString +='</div>';
            appendString +='</div>';
            appendString +='</div>';
            appendString +='<div class="tab-pane fade" id="tab2-directorio-'+iterador+'">';
            appendString +='<div class="tab-card">';
            appendString +='<div class="tab-card-1">';
            if(item.phone_number){
              appendString +='<div>';
              appendString +='<i class="fas fa-phone fa-sm"></i> ';
              appendString +='<a href="tel:'+item.phone_number+'" class="font-phone-number"> '+item.phone_number+'</a>';
              appendString +='</div>';
            }
            if(item.website){
              appendString +='<div class="smaller-font">';
              appendString +='<i class="fas fa-globe"></i> ';
              appendString +='<a href="https://'+item.website+'"> '+item.website+'</a>';
              appendString +='</div>';
            }
            if(item.facebook_user){
              appendString +='<div class="smaller-font">';
              appendString +='<i class="fab fa-facebook-square"></i> ';
              appendString +='<a href="https://www.facebook.com/'+item.facebook_user+'"> '+item.facebook_user+'</a>';
              appendString +='</div>';
            }
            if(item.instagram_user){
              appendString +='<div class="smaller-font">';
              appendString +='<i class="fab fa-instagram"></i> ';
              appendString +='<a href="https://instagram.com/'+item.instagram_user+'"> '+item.instagram_user+'</a>';
              appendString +='</div>';
            }
            if(item.twitter_user){
              appendString +='<div class="smaller-font">';
              appendString +='<i class="fab fa-twitter"></i> ';
              appendString +='<a href="https://twitter.com/'+item.twitter_user+'"> '+item.twitter_user+'</a>';
              appendString +='</div>';
            }
            appendString +='</div>';
            appendString +='<div>';
            appendString +='<img src="'+item.image+'" alt="'+item.title+'" class="img-card-no-destacadas">';
            appendString +='</div>';
            appendString +='</div>';
            appendString +='</div>';
            appendString +='</div>';
            appendString +='</div>';
          }
          else {
            appendString +='<div class="card-body position-card">';
            appendString +='<div class="tab-card">';
            appendString +='<div class="tab-card-1">';
            appendString +='<div> <h5 class="text-dark">'+item.title+'</h5></div>';
            if (item.address){
              appendString +='<div class="smaller-font margin-icon"><i class="fas fa-map-marker-alt"></i> ';
              appendString +='<span class="margin-icon">'+item.address+'</span>';
              appendString +='</div>';
            }
            if(item.types){
              appendString +='<div class="smaller-font margin-icon"><i class="fas fa-building"></i>';
              appendString +='<span class="margin-icon-search">'+types+' </span>';
              appendString +='</div>';
            }
            if(item.services_extra){
              appendString +='<div class="smaller-font"><i class="fas fa-list"></i> '+item.services_extra+'</div>';
            }
            if(item.services){
              var servicios = JSON.parse(item.services.replace(/&quot;/g, '"'));
              appendString +='<ul class="horizontal-list">';
              for (var j = 0; j < servicios.length; j++) {
                if (servicios_icons[servicios[j]]){
                  appendString +='<li>';
                  appendString +='<i class="'+servicios_icons[servicios[j]]+'" data-toggle="tooltip" data-placement="top" title="'+servicios[j]+'"></i>';
                  appendString +='</li>';
                }
              }
              appendString +='</ul>';
            }
            appendString +='</div>';
            appendString +='</div>';
            appendString +='</div>';
          }
          appendString +='</div>';
          appendString +='</div>';

          if (i % 2 === 1 || i === results.length - 1) {
            appendString += '</div>';
          }
        }
  
        searchDirectorio.innerHTML = appendString;
      } else {
        searchDirectorio.innerHTML = '<div>No hay resultados de la búsqueda...</div>';
      }
    }
  
    function getQueryVariableDirectorio(variable) {
      var queryDirectorio = window.location.search.substring(1);
      var varsD = queryDirectorio.split('&');
  
      for (var i = 0; i < varsD.length; i++) {
        var pair = varsD[i].split('=');
  
        if (pair[0] === variable) {
          return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
        }
      }
    }
  
    var searchTermDirectorio = getQueryVariableDirectorio('query-directorio');

    if (searchTermDirectorio) {
      document.getElementById('search-directorio-box').setAttribute("value", searchTermDirectorio);
  
      // Initalize lunr with the fields it will be searching on. I've given title
      // a boost of 10 to indicate matches on this field are more important.
      var idx_d = lunr(function () {
        this.field('id');
        this.field('title', { boost: 10 });
        this.field('region');
        this.field('state');
        this.field('address');
        this.field('types');
        this.field('services');
        this.field('services_extra');
        this.field('featured');
        this.field('image');
        this.field('phone_number');
        this.field('website');
        this.field('facebook_user');
        this.field('twitter_user');
        this.field('instagram_user');
      });
  
      for (var key in window.store_directorio) { // Add the data to lunr
        var data = {
          'id': key,
          'title': window.store_directorio[key].title,
          'region': window.store_directorio[key].region,
          'state': window.store_directorio[key].state,
          'address': window.store_directorio[key].address,
          'types': window.store_directorio[key].types,
          'services': window.store_directorio[key].services,
          'services_extra': window.store_directorio[key].services_extra,
          'featured': window.store_directorio[key].featured,
          'image': window.store_directorio[key].image,
          'phone_number': window.store_directorio[key].phone_number,
          'website': window.store_directorio[key].website,
          'facebook_user': window.store_directorio[key].facebook_user,
          'twitter_user': window.store_directorio[key].twitter_user,
          'instagram_user': window.store_directorio[key].instagram_user,
        };
        delete data.featured; 
        delete data.image; 
        delete data.phone_number; 
        delete data.website; 
        delete data.facebook_user; 
        delete data.twitter_user; 
        delete data.instagram_user; 
        idx_d.add(data);
        var results = idx_d.search(searchTermDirectorio); // Get lunr to perform a search
        displaySearchDirectorio(results, window.store_directorio); // We'll write this in the next section
      }
    }

    window.addEventListener("load", function() {
      // Obtener el ID de la tarjeta de la URL
      const urlParams = new URLSearchParams(window.location.search);
      const cardId = urlParams.get("id");
  
      // Obtener la tarjeta correspondiente y agregar la clase de resaltado
      if (cardId) {
        const card = document.getElementById(cardId);
        if (card) {
          card.scrollIntoView({ behavior: "smooth" });
          card.classList.add("highlight");
          card.addEventListener("animationend", function() {
            card.style.backgroundColor = "transparent";
            card.classList.remove("highlight");
          });
        }
      }
    });
  })();

