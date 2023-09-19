(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<li class="border-bottom mb-4 pb-3"><h4><a class="text-dark" href="' + item.url + '">' + item.title + '</a></h4>';
        appendString +='<p>' + item.date + '</p>';
        appendString += '<p>' + item.content.substring(0, 245) + '...</p>';
        appendString += '<a href="' + item.url + '" class="btn btn-transparent pl-0">' + "Ver más..." + '</a></li>';
      }

      searchResults.innerHTML = appendString;
    } 
  }

  function quitarReview(cadena) {
    return cadena.replace("/review/review-", "/review/");
  }  

  function ajustarContenido(content, maxPalabras) {
    var palabras = content.split(" ");
    var contenidoAjustado = palabras.slice(0, maxPalabras).join(" ");
  
    if (palabras.length > maxPalabras) {
      contenidoAjustado += "...";
    }
  
    return contenidoAjustado;
  }

  function displaySearchDestacadasDirectorio(results, store) {
    var searchDestacadasDirectorio = document.getElementById('search-results-destacadas');
    if (results.length) { // Are there any results?
      var appendString = '';
      var iterador = 0;
      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref]; 
        var array_reviews = Object.entries(reviews);
        var rev = false;
        var titulo = '';
        var contenido = '';
        var url = '';
        for (var k = 0; k < array_reviews.length; k++) {
          if(array_reviews[k][1].title == item.title){
            console.log(array_reviews[k][1]);
            rev = true;
            titulo = array_reviews[k][1].title;
            contenido = ajustarContenido(array_reviews[k][1].content, 30);;
            url = quitarReview("/review/"+array_reviews[k][0]+"/");
          }
        }
        if (item.featured === "true"){
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
          if (iterador % 2 === 1) {
            appendString += '<div class="row">';
          }
          appendString +='<div class="col-lg-6 col-sm-10">';
          appendString +='<div class="card card-separation">';
          appendString +='<div class="card-body position-card">';
          appendString +='<ul class="nav nav-tabs">';
          appendString +='<li class="nav-item">';
          appendString +='<a class="nav-link active" data-toggle="tab" href="#tab1-directorio-'+iterador+'">'+"General"+'</a>';
          appendString +='</li>';
          if(rev){
            appendString +='<li class="nav-item">';
            appendString +='<a class="nav-link" data-toggle="tab" href="#tabr1-directorio-'+iterador+'">'+"Reseña"+'</a>';
            appendString +='</li>';
          }
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
          if(item.services){
            var servicios = JSON.parse(item.services.replace(/&quot;/g, '"'));
            appendString +='<div class="margin-services">';
            appendString +='<ul class="horizontal-list">';
            for (var j = 0; j < servicios.length; j++) {
              if (servicios_icons[servicios[j]]){
                appendString +='<li>';
                appendString +='<i class="'+servicios_icons[servicios[j]]+'" data-toggle="tooltip" data-placement="top" title="'+servicios[j]+'"></i>';
                appendString +='</li>';
              }
            }
            appendString +='</ul>';
            appendString +='</div>';
          }
          appendString +='</div>';
          appendString +='</div>';
          appendString +='</div>';
          if(rev){
            appendString +='<div class="tab-pane fade" id="tabr1-directorio-'+iterador+'">';
            appendString +='<div class="tab-card">';
            appendString +='<div class="tab-card-1">';
            appendString +='<div>';
            appendString +='<h5 class="text-dark">'+titulo+'</h5>';
            appendString +='<p>'+contenido+'</p>';
            appendString +='<a href="'+url+'">Ver reseña completa</a>';
            appendString +='</div>';
            appendString +='</div>';
            appendString +='</div>';
            appendString +='</div>';
          }
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
          appendString +='</div>';
          appendString +='</div>';
          if (iterador % 2 === 0 || i === results.length - 1) {
            appendString += '</div>';
          }
        }
      }

      searchDestacadasDirectorio.innerHTML = appendString;
    } 
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);
    var results = "";
    var results_d = "";
    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
      this.field('content');
    });

    var idx_dir = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('region');
      this.field('state');
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

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'category': window.store[key].category,
        'content': window.store[key].content
      });

      results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }

    for (var key2 in window.store_directorio) { // Add the data to lunr
      var data = {
        'id': key2,
        'title': window.store_directorio[key2].title,
        'region': window.store_directorio[key2].region,
        'state': window.store_directorio[key2].state,
        'address': window.store_directorio[key2].address,
        'types': window.store_directorio[key2].types,
        'services': window.store_directorio[key2].services,
        'featured': window.store_directorio[key2].featured,
        'image': window.store_directorio[key2].image,
        'phone_number': window.store_directorio[key2].phone_number,
        'website': window.store_directorio[key2].website,
        'facebook_user': window.store_directorio[key2].facebook_user,
        'twitter_user': window.store_directorio[key2].twitter_user,
        'instagram_user': window.store_directorio[key2].instagram_user,
      };
      delete data.featured; 
      delete data.image; 
      delete data.phone_number; 
      delete data.website; 
      delete data.facebook_user; 
      delete data.twitter_user; 
      delete data.instagram_user; 
      idx_dir.add(data);
      results_d = idx_dir.search(searchTerm); // Get lunr to perform a search
      displaySearchDestacadasDirectorio(results_d, window.store_directorio); // We'll write this in the next section
    }
  }
})();