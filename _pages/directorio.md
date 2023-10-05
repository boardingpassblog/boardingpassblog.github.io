---
layout: section
title: Directorio
permalink: /directorio/
---

{% 
  include ads/banner.html 
  content=site.data.ads.ads_directorio.section-directorio
%}

{% include pages/title.html %}


<nav class="navbar navbar-expand-lg navbar-light">
  <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navogation-directorio"
    aria-controls="navogation-directorio" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse text-center" id="navogation-directorio">
    <ul class="navbar-nav">
      <li class="nav-item">
      </li>
      <li class="nav-item">
        <div class="nav-link text-uppercase text-dark" id="verLabel">
          Ver
        </div>
      </li>
      <li id="dropdownEntradas" class="nav-item dropdown">
        <a class="nav-link text-uppercase text-dark dropdown-toggle" id="navbarDropdownEntradas" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Todos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownEntradas">
          <a class="dropdown-item text-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="changeDropdownOption('dropdownEntradas', 'Todos')" id="opcionTodos">Todos</a>
          <a class="dropdown-item text-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="changeDropdownOption('dropdownEntradas', 'Destacados')" id="opcionDestacados">Destacados</a>
          <a class="dropdown-item text-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="changeDropdownOption('dropdownEntradas', 'No destacados')" id="opcionNoDestacados">No destacados</a>
        </div>
      </li>
      <li class="nav-item">
         <a class="nav-link text-uppercase text-dark" id="verLabel">
        </a>
      </li>
      <li class="nav-item">
        <div class="nav-link text-uppercase text-dark" id="verLabel">
          Clasificar por
        </div>
      </li>
      <li id="dropdownOrdenar" class="nav-item dropdown">
        <a class="nav-link text-uppercase text-dark dropdown-toggle" id="navbarDropdownOrdenar" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Nombre
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownOrdenar">
          <a class="dropdown-item text-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="changeDropdownOption('dropdownOrdenar', 'Nombre')" id="opcionNombre">Nombre</a>
          <a class="dropdown-item text-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="changeDropdownOption('dropdownOrdenar', 'Región')" id="opcionRegion">Región</a>
          <a class="dropdown-item text-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="changeDropdownOption('dropdownOrdenar', 'Estado')" id="opcionEstado">Estado</a>
        </div>
      </li>
    </ul>
    <form class="form-inline position-relative ml-lg-4 custom-form custom-width-form" action="/search-directorio.html" method="get">
      <input class="form-control px-0 w-100" type="search" id="search-directorio-box" name="query-directorio" placeholder="Búsqueda en el directorio ..." pattern=".*\S+.*" required>
      <button class="search-icon" type="submit"><i class="ti-search text-dark"></i></button>
    </form>
  </div>
</nav>

<!-- blog post -->
<section class="section">
  <div class="container maxw mb-4">
    <div class="row ">
      <div class="col-lg-9" id="seccionDestacados">
        <div class="row">
          {% assign sorted_posts = site.directorio | sort_natural: 'title' | where: 'featured', true %}
          {% assign current_letter = '' %}
          {% assign iterator = 0 %}
          {% for post in sorted_posts %}
            {% assign post_title_first_letter = post.title | slice: 0, 1 | upcase %}
            {% assign title-review = post.title %}
            {% assign review = site.review | where: "title", title-review | first %}
            {% if post_title_first_letter != current_letter %}
              <div class="col-12">
                <h4 class="letter-title">{{ post_title_first_letter }}</h4>
              </div>
              {% assign current_letter = post_title_first_letter %}
            {% endif %} 
            {% assign tab1 = "tab1" %}
            {% assign tab2 = "tab2" %}
            {% assign tabr1 = "tabr1" %}
            {% 
                include entradas-destacadas.html
                t1=tab1
                tr1=tabr1
                t2=tab2
            %}
          {% endfor %}
        </div>  
      </div> 
      <div class="col-lg-9" id="seccionNoDestacados">
        <div class="row">
          {% assign sorted_posts = site.directorio | sort_natural: 'title' | where: 'featured', false %}
          {% assign current_letter = '' %}
          {% assign iterator = 0 %}
          {% for post in sorted_posts %}
            {% assign post_title_first_letter = post.title | slice: 0, 1 | upcase %}
            {% if post_title_first_letter != current_letter %}
              <div class="col-12">
                <h4 class="letter-title">{{ post_title_first_letter }}</h4>
              </div>
              {% assign current_letter = post_title_first_letter %}
            {% endif %} 
            {% include entradas-no-destacadas.html %}
          {% endfor %}
        </div>  
      </div> 
      <div class="col-lg-9" id="seccionNoDestacadosRegion">
        <div class="row">
          {% assign sorted_posts = site.directorio | sort: 'region' | where: 'featured', false %}
          {% assign current_region = '' %}
          {% assign iterator = 0 %}
          {% for post in sorted_posts %}
            {% assign post_region = post.region %}
            {% if post_region != current_region %}
              <div class="col-12">
                <h4 class="letter-title">{{ post_region }}</h4>
              </div>
              {% assign current_region = post_region %}
            {% endif %}
            {% include entradas-no-destacadas.html %}
          {% endfor %}
        </div>  
      </div> 
      <div class="col-lg-9" id="seccionDestacadosRegion">
        <div class="row">
          {% assign sorted_posts = site.directorio | sort: 'region' | where: 'featured', true %}
          {% assign current_region = '' %}
          {% assign iterator = 0 %}
          {% for post in sorted_posts %}
            {% assign post_region = post.region %}
            {% assign title-review = post.title %}
            {% assign review = site.review | where: "title", title-review | first %}
            {% if post_region != current_region %}
              <div class="col-12">
                <h4 class="letter-title">{{ post_region }}</h4>
              </div>
              {% assign current_region = post_region %}
            {% endif %}
            {% assign tab1 = "tab9" %}
            {% assign tab2 = "tab10" %}
            {% assign tabr1 = "tabr2" %}
            {% 
                include entradas-destacadas.html
                t1=tab1
                tr1=tabr1
                t2=tab2
            %}
          {% endfor %}
        </div>  
      </div> 
      <div class="col-lg-9" id="seccionEntradasRegion">
        <div class="row">
          {% assign sorted_posts = site.directorio | sort: 'region' %}
          {% assign current_region = '' %}
          {% assign iterator = 0 %}
          {% for post in sorted_posts %}
            {% assign post_region = post.region %}
            {% assign title-review = post.title %}
            {% assign review = site.review | where: "title", title-review | first %}
            {% if post_region != current_region %}
              <div class="col-12">
                <h4 class="letter-title">{{ post_region }}</h4>
              </div>
              {% assign current_region = post_region %}
            {% endif %} 
            {% assign tab1 = "tab3" %}
            {% assign tab2 = "tab4" %}
            {% assign tabr1 = "tabr3" %}
            {% 
                include entradas-destacadas.html
                t1=tab1
                tr1=tabr1
                t2=tab2
            %} 
            {% include entradas-no-destacadas.html %}
          {% endfor %}
        </div>  
      </div> 
      <div class="col-lg-9" id="seccionNoDestacadosEstados">
        <div class="row">
          {% assign sorted_posts = site.directorio | sort: 'state' | where: 'featured', false %}
          {% assign current_state = '' %}
          {% assign iterator = 0 %}
          {% for post in sorted_posts %}
            {% assign post_state = post.state %}
            {% if post_state != current_state %}
              <div class="col-12">
                <h4 class="letter-title">{{ post_state }}</h4>
              </div>
              {% assign current_state = post_state %}
            {% endif %}
            {% include entradas-no-destacadas.html %}
          {% endfor %}
        </div>  
      </div> 
      <div class="col-lg-9" id="seccionDestacadosEstados">
        <div class="row">
          {% assign sorted_posts = site.directorio | sort: 'state' | where: 'featured', true %}
          {% assign current_state = '' %}
          {% assign iterator = 0 %}
          {% for post in sorted_posts %}
            {% assign post_state = post.state %}
            {% assign title-review = post.title %}
            {% assign review = site.review | where: "title", title-review | first %}
            {% if post_state != current_state %}
              <div class="col-12">
                <h4 class="letter-title">{{ post_state }}</h4>
              </div>
              {% assign current_state = post_state %}
            {% endif %}
            {% assign tab1 = "tab11" %}
            {% assign tab2 = "tab12" %}
            {% assign tabr1 = "tabr4" %}
            {% 
                include entradas-destacadas.html
                t1=tab1
                tr1=tabr1
                t2=tab2
            %}
          {% endfor %}
        </div>  
      </div> 
      <div class="col-lg-9" id="seccionEntradasEstados">
        <div class="row">
          {% assign sorted_posts = site.directorio | sort: 'state' %}
          {% assign current_state = '' %}
          {% assign iterator = 0 %}
          {% for post in sorted_posts %}
            {% assign post_state = post.state %}
            {% assign title-review = post.title %}
            {% assign review = site.review | where: "title", title-review | first %}
            {% if post_state != current_state %}
              <div class="col-12">
                <h4 class="letter-title">{{ post_state }}</h4>
              </div>
              {% assign current_state = post_state %}
            {% endif %}
            {% assign tab1 = "tab5" %}
            {% assign tab2 = "tab6" %}
            {% assign tabr1 = "tabr5" %}
            {% 
                include entradas-destacadas.html
                t1=tab1
                tr1=tabr1
                t2=tab2
            %} 
            {% include entradas-no-destacadas.html %}
          {% endfor %}
        </div>  
      </div> 
      <div class="col-lg-9" id="seccionEntradas">
        <div class="row">
          {% assign sorted_posts = site.directorio | sort_natural: 'title' %}
          {% assign current_letter = '' %}
          {% assign iterator = 0 %}
          {% for post in sorted_posts %}
            {% assign post_title_first_letter = post.title | slice: 0, 1 | upcase %}
            {% assign title-review = post.title %}
            {% assign review = site.review | where: "title", title-review | first %}
            {% if post_title_first_letter != current_letter %}
              <div class="col-12">
                <h4 class="letter-title">{{ post_title_first_letter }}</h4>
              </div>
              {% assign current_letter = post_title_first_letter %}
            {% endif %} 
            {% assign tab1 = "tab7" %}
            {% assign tab2 = "tab8" %}
            {% assign tabr1 = "tabr6" %}
            {% 
                include entradas-destacadas.html
                t1=tab1
                tr1=tabr1
                t2=tab2
            %} 
            {% include entradas-no-destacadas.html %}
          {% endfor %}
        </div>  
      </div> 
      <div class="col-lg-3">
        {% 
					include sidebar.html 
					banner0=site.data.ads.ads_directorio.sidebar_directorio-0
					banner1=site.data.ads.ads_directorio.sidebar_directorio-1
					banner2=site.data.ads.ads_directorio.sidebar_directorio-2
					banner3=site.data.ads.ads_directorio.sidebar_directorio-3
					banner4=site.data.ads.ads_directorio.sidebar_directorio-4
					banner5=site.data.ads.ads_directorio.sidebar_directorio-5
				%}
      </div> 
    </div>
  </div>
</section>
<!-- /blog post -->

<script>
 function changeDropdownOption(dropdownId, optionText) { 
    const dropdown = document.getElementById(dropdownId);
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    dropdownToggle.innerHTML = optionText;
  }

  changeDropdownOption('dropdownEntradas', document.getElementById('navbarDropdownEntradas').innerHTML.trim());
  changeDropdownOption('dropdownOrdenar', document.getElementById('navbarDropdownOrdenar').innerHTML.trim());

  document.querySelectorAll('.card-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); 
      var target = this.getAttribute('href');
      var element = document.querySelector(target); 
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
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
</script>


