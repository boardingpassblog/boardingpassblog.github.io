(function() {
    function displaySearchDirectorio(results, store) {
      var searchDirectorio = document.getElementById('search-results-directorio');
  
      if (results.length) { // Are there any results?
        var appendString = '';
        var iterador = 0;
        for (var i = 0; i < results.length; i++) {  // Iterate over the results
          var item = store[results[i].ref]; 
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
            appendString +='<div class="tab-pane-card post-thumb-sm-directorio">';
            appendString +='<img src="'+item.image+'" alt="'+item.name+'" class="img-card">';
            appendString +='</div>';
            appendString +='<div class="tab-card-1">';
            appendString +='<div> <h5 class="text-dark">'+item.name+'</h5></div>';
            appendString +='<div class="smaller-font"><i class="fas fa-map-marker-alt"></i> '+item.address+'</div>';
            appendString +='<div class="smaller-font"><i class="fas fa-bullhorn"></i> '+item.services+'</div>';
            appendString +='<div class="smaller-font"><i class="fas fa-industry"></i> '+item.sector+'</div>';
            appendString +='</div>';
            appendString +='</div>';
            appendString +='</div>';
            appendString +='<div class="tab-pane fade" id="tab2-directorio-'+iterador+'">';
            appendString +='<div class="tab-card">';
            appendString +='<div class="tab-card-1">';
            appendString +='<div>';
            appendString +='<i class="fas fa-phone"></i> ';
            appendString +='<a href="tel:'+item.phone_number+'" class="font-phone-number"> '+item.phone_number+'</a>';
            appendString +='</div>';
            appendString +='<div class="smaller-font">';
            appendString +='<i class="fas fa-globe"></i> ';
            appendString +='<a href="https://'+item.website+'"> '+item.website+'</a>';
            appendString +='</div>';
            appendString +='<div class="smaller-font">';
            appendString +='<i class="fab fa-facebook-square"></i> ';
            appendString +='<a href="https://www.facebook.com/'+item.facebook_user+'"> '+item.facebook_user+'</a>';
            appendString +='</div>';
            appendString +='<div class="smaller-font">';
            appendString +='<i class="fab fa-instagram"></i> ';
            appendString +='<a href="https://instagram.com/'+item.instagram_user+'"> '+item.instagram_user+'</a>';
            appendString +='</div>';
            appendString +='<div class="smaller-font">';
            appendString +='<i class="fab fa-twitter"></i> ';
            appendString +='<a href="https://twitter.com/'+item.twitter_user+'"> '+item.twitter_user+'</a>';
            appendString +='</div>';
            appendString +='</div>';
            appendString +='<div class="margin-img-card">';
            appendString +='<img src="'+item.image+'" alt="'+item.name+'" class="img-card-no-destacadas">';
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
            appendString +='<div> <h5 class="text-dark">'+item.name+'</h5></div>';
            appendString +='<div class="smaller-font"><i class="fas fa-map-marker-alt"></i> '+item.address+'</div>';
            appendString +='<div class="smaller-font"><i class="fas fa-bullhorn"></i> '+item.services+'</div>';
            appendString +='<div class="smaller-font"><i class="fas fa-industry"></i> '+item.sector+'</div>';
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
        this.field('name', { boost: 10 });
        this.field('region');
        this.field('state');
        this.field('sector');
        this.field('address');
        this.field('types');
        this.field('services');
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
          'name': window.store_directorio[key].name,
          'region': window.store_directorio[key].region,
          'state': window.store_directorio[key].state,
          'sector': window.store_directorio[key].sector,
          'address': window.store_directorio[key].address,
          'types': window.store_directorio[key].types,
          'services': window.store_directorio[key].services,
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

