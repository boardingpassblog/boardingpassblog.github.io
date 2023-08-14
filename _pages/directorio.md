---
layout: section
title: Directorio
permalink: /directorio/
---

{% 
  include ads/banner.html 
  content=site.data.ads.section-directorio
%}

{% include pages/title.html %}

<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
      </li>
      <li class="nav-item dropdown">
        <li id="dropdownEntradas" class="nav-item dropdown">
          <a class="nav-link text-uppercase text-dark dropdown-toggle" id="navbarDropdownEntradas" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Entradas
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownEntradas">
            <li id="opcionTodas"><a class="text-dark dropdown-item">Todas</a></li>
            <li id="opcionDestacados"><a class="text-dark dropdown-item">Destacados</a></li>
            <li id="opcionNoDestacados"><a class="text-dark dropdown-item">No destacados</a></li>
          </ul>
        </li>
        <li id="dropdownOrdenar" class="nav-item dropdown">
          <a class="nav-link text-uppercase text-dark dropdown-toggle" id="navbarDropdownOrdenar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ordenar
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownOrdenar">
            <li id="opcionNombre"><a class="text-dark dropdown-item" >Nombre</a></li>
            <li id="opcionRegion"><a class="text-dark dropdown-item" >Región</a></li>
            <li id="opcionEstado"><a class="text-dark dropdown-item" >Estado</a></li>
          </ul>
        </li>
      </li>
    </ul>
    <form class="form-inline position-relative ml-lg-4 custom-form" action="" method="get">
      <input class="form-control px-0 w-100" type="search" id="" name="query" placeholder="Búsqueda...">
      <button class="search-icon" type="submit"><i class="ti-search text-dark"></i></button>
    </form>
  </div>
</nav>

<div id="seccionDestacados">
  <!-- blog post -->
  <section class="section">
    <div class="container maxw mb-4">
      <div class="row ">
        <div class="col-lg-9">
          <div class="row">
            {% assign sorted_posts = site.directorio | sort: 'title' | where: 'featured', true %}
            {% assign current_letter = '' %}
            {% assign iterator = 0 %}
            {% for post in sorted_posts %}
              {% assign post_title_first_letter = post.name | slice: 0, 1 | upcase %}
              {% if post_title_first_letter != current_letter %}
                <div class="col-12">
                  <h4 class="letter-title">{{ post_title_first_letter }}</h4>
                </div>
                {% assign current_letter = post_title_first_letter %}
              {% endif %} 
              {% if post.featured == true %}
              <div class="col-lg-6 col-sm-10">
                {% assign iterator = iterator | plus: 1 %}
                <div class="card card-separation">
                  <div class="card-body position-card">
                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#tab1-{{iterator}}">General</a>
                      </li>
                      <li class="nav-item"> 
                        <a class="nav-link" data-toggle="tab" href="#tab2-{{iterator}}">Contacto</a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane fade show active" id="tab1-{{iterator}}"><br>
                        <div class="tab-card">
                          <div class="tab-pane-card">
                            <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                          </div>
                          <div class="tab-card-1">
                            <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                            <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                            <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="tab2-{{iterator}}"><br>
                        <div class="tab-card">
                          <div class="tab-card-1">
                            <div><i class="fas fa-phone"></i> {{post.phone_number}}</div>
                            <div><i class="fas fa-globe"></i> {{post.web_page}}</div>
                            <div><i class="fab fa-facebook-square"></i> {{post.facebook_page}}</div>
                            <div><i class="fab fa-instagram"></i> {{post.instagram_page}}</div>
                            <div><i class="fab fa-twitter"></i> {{post.twitter_page}}</div>
                          </div>
                          <div class="margin-img-card">
                            <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {% endif %}
            {% endfor %}
          </div>  
        </div> 
        <div class="col-lg-3">
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-1  
          %}
          {% include recientes.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-2
          %}
          {% include secciones.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-3
          %}
        </div> 
      </div>
    </div>
  </section>
  <!-- /blog post -->
</div>

<div id="seccionNoDestacados">
    <!-- blog post -->
  <section class="section">
    <div class="container maxw mb-4">
      <div class="row ">
        <div class="col-lg-9">
          <div class="row">
            {% assign sorted_posts = site.directorio | sort: 'title' | where: 'featured', false %}
            {% assign current_letter = '' %}
            {% assign iterator = 0 %}
            {% for post in sorted_posts %}
              {% assign post_title_first_letter = post.name | slice: 0, 1 | upcase %}
              {% if post_title_first_letter != current_letter %}
                <div class="col-12">
                  <h4 class="letter-title">{{ post_title_first_letter }}</h4>
                </div>
                {% assign current_letter = post_title_first_letter %}
              {% endif %} 
              <div class="col-lg-6 col-sm-10">
                {% assign iterator = iterator | plus: 1 %}
                {% if post.featured == false %}
                <div class="card card-separation">
                  <div class="card-body position-card">
                    <div class="tab-card">
                      <div class="tab-card-1">
                        <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                        <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                        <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {% endif %}
              </div>
            {% endfor %}
          </div>  
        </div> 
        <div class="col-lg-3">
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-1  
          %}
          {% include recientes.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-2
          %}
          {% include secciones.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-3
          %}
        </div> 
      </div>
    </div>
  </section>
  <!-- /blog post -->
</div>

<div id="seccionNoDestacadosRegion">
    <!-- blog post -->
  <section class="section">
    <div class="container maxw mb-4">
      <div class="row ">
        <div class="col-lg-9">
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
              <div class="col-lg-6 col-sm-10">
                {% assign iterator = iterator | plus: 1 %}
                {% if post.featured == false %}
                <div class="card card-separation">
                  <div class="card-body position-card">
                    <div class="tab-card">
                      <div class="tab-card-1">
                        <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                        <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                        <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {% endif %}
              </div>
            {% endfor %}
          </div>  
        </div> 
        <div class="col-lg-3">
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-1  
          %}
          {% include recientes.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-2
          %}
          {% include secciones.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-3
          %}
        </div> 
      </div>
    </div>
  </section>
  <!-- /blog post -->
</div>

<div id="seccionDestacadosRegion">
  <!-- blog post -->
  <section class="section">
    <div class="container maxw mb-4">
      <div class="row ">
        <div class="col-lg-9">
          <div class="row">
            {% assign sorted_posts = site.directorio | sort: 'region' | where: 'featured', true %}
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
              <div class="col-lg-6 col-sm-10">
                {% assign iterator = iterator | plus: 1 %}
                <div class="card card-separation">
                  {% if post.featured == true %}
                  <div class="card-body position-card">
                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#tab9-{{iterator}}">General</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tab10-{{iterator}}">Contacto</a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane fade show active" id="tab9-{{iterator}}"><br>
                        <div class="tab-card">
                          <div class="tab-pane-card">
                            <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                          </div>
                          <div class="tab-card-1">
                            <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                            <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                            <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="tab10-{{iterator}}"><br>
                        <div class="tab-card">
                          <div class="tab-card-1">
                            <div><i class="fas fa-phone"></i> {{post.phone_number}}</div>
                            <div><i class="fas fa-globe"></i> {{post.web_page}}</div>
                            <div><i class="fab fa-facebook-square"></i> {{post.facebook_page}}</div>
                            <div><i class="fab fa-instagram"></i> {{post.instagram_page}}</div>
                            <div><i class="fab fa-twitter"></i> {{post.twitter_page}}</div>
                          </div>
                          <div class="margin-img-card">
                            <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {% else %}
                  <div class="card-body position-card">
                    <div class="tab-card">
                      <div class="tab-card-1">
                        <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                        <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                        <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                      </div>
                    </div>
                  </div>
                  {% endif %}
                </div>
              </div>
            {% endfor %}
          </div>  
        </div> 
        <div class="col-lg-3">
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-1  
          %}
          {% include recientes.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-2
          %}
          {% include secciones.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-3
          %}
        </div> 
      </div>
    </div>
  </section>
  <!-- /blog post -->
</div>

<div id="seccionEntradasRegion">
  <!-- blog post -->
  <section class="section">
    <div class="container maxw mb-4">
      <div class="row ">
        <div class="col-lg-9">
          <div class="row">
            {% assign sorted_posts = site.directorio | sort: 'region' %}
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
              <div class="col-lg-6 col-sm-10">
                {% assign iterator = iterator | plus: 1 %}
                <div class="card card-separation">
                  {% if post.featured == true %}
                  <div class="card-body position-card">
                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#tab3-{{iterator}}">General</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tab4-{{iterator}}">Contacto</a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane fade show active" id="tab3-{{iterator}}"><br>
                        <div class="tab-card">
                          <div class="tab-pane-card">
                            <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                          </div>
                          <div class="tab-card-1">
                            <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                            <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                            <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="tab4-{{iterator}}"><br>
                        <div class="tab-card">
                          <div class="tab-card-1">
                            <div><i class="fas fa-phone"></i> {{post.phone_number}}</div>
                            <div><i class="fas fa-globe"></i> {{post.web_page}}</div>
                            <div><i class="fab fa-facebook-square"></i> {{post.facebook_page}}</div>
                            <div><i class="fab fa-instagram"></i> {{post.instagram_page}}</div>
                            <div><i class="fab fa-twitter"></i> {{post.twitter_page}}</div>
                          </div>
                          <div class="margin-img-card">
                            <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {% else %}
                  <div class="card-body position-card">
                    <div class="tab-card">
                      <div class="tab-card-1">
                        <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                        <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                        <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                      </div>
                    </div>
                  </div>
                  {% endif %}
                </div>
              </div>
            {% endfor %}
          </div>  
        </div> 
        <div class="col-lg-3">
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-1  
          %}
          {% include recientes.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-2
          %}
          {% include secciones.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-3
          %}
        </div> 
      </div>
    </div>
  </section>
  <!-- /blog post -->
</div>

<div id="seccionNoDestacadosEstados">
    <!-- blog post -->
  <section class="section">
    <div class="container maxw mb-4">
      <div class="row ">
        <div class="col-lg-9">
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
              <div class="col-lg-6 col-sm-10">
                {% assign iterator = iterator | plus: 1 %}
                {% if post.featured == false %}
                <div class="card card-separation">
                  <div class="card-body position-card">
                    <div class="tab-card">
                      <div class="tab-card-1">
                        <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                        <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                        <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {% endif %}
              </div>
            {% endfor %}
          </div>  
        </div> 
        <div class="col-lg-3">
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-1  
          %}
          {% include recientes.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-2
          %}
          {% include secciones.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-3
          %}
        </div> 
      </div>
    </div>
  </section>
  <!-- /blog post -->
</div>

<div id="seccionDestacadosEstados">
  <!-- blog post -->
  <section class="section">
    <div class="container maxw mb-4">
      <div class="row ">
        <div class="col-lg-9">
          <div class="row">
            {% assign sorted_posts = site.directorio | sort: 'state' | where: 'featured', true %}
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
              <div class="col-lg-6 col-sm-10">
                {% assign iterator = iterator | plus: 1 %}
                <div class="card card-separation">
                  {% if post.featured == true %}
                  <div class="card-body position-card">
                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#tab11-{{iterator}}">General</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tab12-{{iterator}}">Contacto</a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane fade show active" id="tab11-{{iterator}}"><br>
                        <div class="tab-card">
                          <div class="tab-pane-card">
                            <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                          </div>
                          <div class="tab-card-1">
                            <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                            <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                            <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="tab12-{{iterator}}"><br>
                        <div class="tab-card">
                          <div class="tab-card-1">
                            <div><i class="fas fa-phone"></i> {{post.phone_number}}</div>
                            <div><i class="fas fa-globe"></i> {{post.web_page}}</div>
                            <div><i class="fab fa-facebook-square"></i> {{post.facebook_page}}</div>
                            <div><i class="fab fa-instagram"></i> {{post.instagram_page}}</div>
                            <div><i class="fab fa-twitter"></i> {{post.twitter_page}}</div>
                          </div>
                          <div class="margin-img-card">
                            <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {% else %}
                  <div class="card-body position-card">
                    <div class="tab-card">
                      <div class="tab-card-1">
                        <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                        <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                        <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                      </div>
                    </div>
                  </div>
                  {% endif %}
                </div>
              </div>
            {% endfor %}
          </div>  
        </div> 
        <div class="col-lg-3">
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-1  
          %}
          {% include recientes.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-2
          %}
          {% include secciones.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-3
          %}
        </div> 
      </div>
    </div>
  </section>
  <!-- /blog post -->
</div>

<div id="seccionEntradasEstados">
  <!-- blog post -->
  <section class="section">
    <div class="container maxw mb-4">
      <div class="row ">
        <div class="col-lg-9">
          <div class="row">
            {% assign sorted_posts = site.directorio | sort: 'state' %}
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
              <div class="col-lg-6 col-sm-10">
                {% assign iterator = iterator | plus: 1 %}
                <div class="card card-separation">
                  {% if post.featured == true %}
                  <div class="card-body position-card">
                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#tab5-{{iterator}}">General</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tab6-{{iterator}}">Contacto</a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane fade show active" id="tab5-{{iterator}}"><br>
                        <div class="tab-card">
                          <div class="tab-pane-card">
                            <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                          </div>
                          <div class="tab-card-1">
                            <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                            <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                            <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="tab6-{{iterator}}"><br>
                        <div class="tab-card">
                          <div class="tab-card-1">
                            <div><i class="fas fa-phone"></i> {{post.phone_number}}</div>
                            <div><i class="fas fa-globe"></i> {{post.web_page}}</div>
                            <div><i class="fab fa-facebook-square"></i> {{post.facebook_page}}</div>
                            <div><i class="fab fa-instagram"></i> {{post.instagram_page}}</div>
                            <div><i class="fab fa-twitter"></i> {{post.twitter_page}}</div>
                          </div>
                          <div class="margin-img-card">
                            <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {% else %}
                  <div class="card-body position-card">
                    <div class="tab-card">
                      <div class="tab-card-1">
                        <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                        <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                        <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                      </div>
                    </div>
                  </div>
                  {% endif %}
                </div>
              </div>
            {% endfor %}
          </div>  
        </div> 
        <div class="col-lg-3">
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-1  
          %}
          {% include recientes.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-2
          %}
          {% include secciones.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-3
          %}
        </div> 
      </div>
    </div>
  </section>
  <!-- /blog post -->
</div>

<div id="seccionEntradas">
  <!-- blog post -->
  <section class="section">
    <div class="container maxw mb-4">
      <div class="row ">
        <div class="col-lg-9">
          <div class="row">
            {% assign sorted_posts = site.directorio | sort: 'title' %}
            {% assign current_letter = '' %}
            {% assign iterator = 0 %}
            {% for post in sorted_posts %}
              {% assign post_title_first_letter = post.name | slice: 0, 1 | upcase %}
              {% if post_title_first_letter != current_letter %}
                <div class="col-12">
                  <h4 class="letter-title">{{ post_title_first_letter }}</h4>
                </div>
                {% assign current_letter = post_title_first_letter %}
              {% endif %} 
              <div class="col-lg-6 col-sm-10">
                {% assign iterator = iterator | plus: 1 %}
                <div class="card card-separation">
                  {% if post.featured == true %}
                  <div class="card-body position-card">
                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#tab7-{{iterator}}">General</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tab8-{{iterator}}">Contacto</a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane fade show active" id="tab7-{{iterator}}"><br>
                        <div class="tab-card">
                          <div class="tab-pane-card">
                            <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                          </div>
                          <div class="tab-card-1">
                            <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                            <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                            <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="tab8-{{iterator}}"><br>
                        <div class="tab-card">
                          <div class="tab-card-1">
                            <div><i class="fas fa-phone"></i> {{post.phone_number}}</div>
                            <div><i class="fas fa-globe"></i> {{post.web_page}}</div>
                            <div><i class="fab fa-facebook-square"></i> {{post.facebook_page}}</div>
                            <div><i class="fab fa-instagram"></i> {{post.instagram_page}}</div>
                            <div><i class="fab fa-twitter"></i> {{post.twitter_page}}</div>
                          </div>
                          <div class="margin-img-card">
                            <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {% else %}
                  <div class="card-body position-card">
                    <div class="tab-card">
                      <div class="tab-card-1">
                        <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                        <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                        <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                      </div>
                    </div>
                  </div>
                  {% endif %}
                </div>
              </div>
            {% endfor %}
          </div>  
        </div> 
        <div class="col-lg-3">
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-1  
          %}
          {% include recientes.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-2
          %}
          {% include secciones.html %}
          {% 
            include ads/banner.html 
            content=site.data.ads.sidebar_directorio-3
          %}
        </div> 
      </div>
    </div>
  </section>
  <!-- /blog post -->
</div>

