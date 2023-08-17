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
        <a class="nav-link text-uppercase text-dark" id="verLabel">
          Ver
        </a>
      </li>
      <li id="dropdownEntradas" class="nav-item dropdown">
        <a class="nav-link text-uppercase text-dark dropdown-toggle" id="navbarDropdownEntradas" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Todas
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownEntradas">
          <a class="dropdown-item text-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="changeDropdownOption('dropdownEntradas', 'Todas')" id="opcionTodas">Todas</a>
          <a class="dropdown-item text-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="changeDropdownOption('dropdownEntradas', 'Destacados')" id="opcionDestacados">Destacados</a>
          <a class="dropdown-item text-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="changeDropdownOption('dropdownEntradas', 'No destacados')" id="opcionNoDestacados">No destacados</a>
        </div>
      </li>
      <li class="nav-item">
         <a class="nav-link text-uppercase text-dark" id="verLabel">
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-uppercase text-dark" id="verLabel">
          Clasificar por:
        </a>
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
      <input class="form-control px-0 w-100" type="search" id="search-directorio-box" name="query-directorio" placeholder="Búsqueda en directorio ...">
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
                  <div class="tab-content line-break">
                    <div class="tab-pane fade show active" id="tab1-{{iterator}}">
                      <div class="tab-card">
                        <div class="tab-pane-card">
                          <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                        </div>
                        <div class="tab-card-1">
                          <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                          <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                          <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                          <div><i class="fas fa-industry"></i> {{post.sector}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab2-{{iterator}}">
                      <div class="tab-card">
                        <div class="tab-card-1">
                          <div>
                            <i class="fas fa-phone"></i> 
                            <a href="tel:{{post.phone_number}}"> {{post.phone_number}}</a>
                          </div>
                          <div>
                            <i class="fas fa-globe"></i> 
                            <a href="https://{{post.website}}"> {{post.website}}</a>
                          </div>
                          <div>
                            <i class="fab fa-facebook-square"></i> 
                            <a href="https://www.facebook.com/{{post.facebook_user}}"> {{post.facebook_user}}</a>
                          </div>
                          <div>
                            <i class="fab fa-instagram"></i> 
                            <a href="https://instagram.com/{{post.instagram_user}}"> {{post.instagram_user}}</a>
                          </div>
                          <div>
                            <i class="fab fa-twitter"></i> 
                            <a href="https://twitter.com/{{post.twitter_user}}"> {{post.twitter_user}}</a>
                          </div>
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
      <div class="col-lg-9" id="seccionNoDestacados">
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
                      <div><i class="fas fa-industry"></i> {{post.sector}}</div>
                    </div>
                  </div>
                </div>
              </div>
              {% endif %}
            </div>
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
                      <div><i class="fas fa-industry"></i> {{post.sector}}</div>
                    </div>
                  </div>
                </div>
              </div>
              {% endif %}
            </div>
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
                  <div class="tab-content line-break">
                    <div class="tab-pane fade show active" id="tab9-{{iterator}}">
                      <div class="tab-card">
                        <div class="tab-pane-card">
                          <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                        </div>
                        <div class="tab-card-1">
                          <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                          <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                          <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                          <div><i class="fas fa-industry"></i> {{post.sector}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab10-{{iterator}}">
                      <div class="tab-card">
                        <div class="tab-card-1">
                          <div>
                            <i class="fas fa-phone"></i> 
                            <a href="tel:{{post.phone_number}}"> {{post.phone_number}}</a>
                          </div>
                          <div>
                            <i class="fas fa-globe"></i> 
                            <a href="https://{{post.website}}"> {{post.website}}</a>
                          </div>
                          <div>
                            <i class="fab fa-facebook-square"></i> 
                            <a href="https://www.facebook.com/{{post.facebook_user}}"> {{post.facebook_user}}</a>
                          </div>
                          <div>
                            <i class="fab fa-instagram"></i> 
                            <a href="https://instagram.com/{{post.instagram_user}}"> {{post.instagram_user}}</a>
                          </div>
                          <div>
                            <i class="fab fa-twitter"></i> 
                            <a href="https://twitter.com/{{post.twitter_user}}"> {{post.twitter_user}}</a>
                          </div>
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
                      <div><i class="fas fa-industry"></i> {{post.sector}}</div>
                    </div>
                  </div>
                </div>
                {% endif %}
              </div>
            </div>
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
                  <div class="tab-content line-break">
                    <div class="tab-pane fade show active" id="tab3-{{iterator}}">
                      <div class="tab-card">
                        <div class="tab-pane-card">
                          <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                        </div>
                        <div class="tab-card-1">
                          <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                          <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                          <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                          <div><i class="fas fa-industry"></i> {{post.sector}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab4-{{iterator}}">
                      <div class="tab-card">
                        <div class="tab-card-1">
                          <div>
                            <i class="fas fa-phone"></i> 
                            <a href="tel:{{post.phone_number}}"> {{post.phone_number}}</a>
                          </div>
                          <div>
                            <i class="fas fa-globe"></i> 
                            <a href="https://{{post.website}}"> {{post.website}}</a>
                          </div>
                          <div>
                            <i class="fab fa-facebook-square"></i> 
                            <a href="https://www.facebook.com/{{post.facebook_user}}"> {{post.facebook_user}}</a>
                          </div>
                          <div>
                            <i class="fab fa-instagram"></i> 
                            <a href="https://instagram.com/{{post.instagram_user}}"> {{post.instagram_user}}</a>
                          </div>
                          <div>
                            <i class="fab fa-twitter"></i> 
                            <a href="https://twitter.com/{{post.twitter_user}}"> {{post.twitter_user}}</a>
                          </div>
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
                      <div><i class="fas fa-industry"></i> {{post.sector}}</div>
                    </div>
                  </div>
                </div>
                {% endif %}
              </div>
            </div>
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
                      <div><i class="fas fa-industry"></i> {{post.sector}}</div>
                    </div>
                  </div>
                </div>
              </div>
              {% endif %}
            </div>
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
                  <div class="tab-content line-break">
                    <div class="tab-pane fade show active" id="tab11-{{iterator}}">
                      <div class="tab-card">
                        <div class="tab-pane-card">
                          <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                        </div>
                        <div class="tab-card-1">
                          <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                          <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                          <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                          <div><i class="fas fa-industry"></i> {{post.sector}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab12-{{iterator}}">
                      <div class="tab-card">
                        <div class="tab-card-1">
                          <div>
                            <i class="fas fa-phone"></i> 
                            <a href="tel:{{post.phone_number}}"> {{post.phone_number}}</a>
                          </div>
                          <div>
                            <i class="fas fa-globe"></i> 
                            <a href="https://{{post.website}}"> {{post.website}}</a>
                          </div>
                          <div>
                            <i class="fab fa-facebook-square"></i> 
                            <a href="https://www.facebook.com/{{post.facebook_user}}"> {{post.facebook_user}}</a>
                          </div>
                          <div>
                            <i class="fab fa-instagram"></i> 
                            <a href="https://instagram.com/{{post.instagram_user}}"> {{post.instagram_user}}</a>
                          </div>
                          <div>
                            <i class="fab fa-twitter"></i> 
                            <a href="https://twitter.com/{{post.twitter_user}}"> {{post.twitter_user}}</a>
                          </div>
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
                      <div><i class="fas fa-industry"></i> {{post.sector}}</div>
                    </div>
                  </div>
                </div>
                {% endif %}
              </div>
            </div>
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
                  <div class="tab-content line-break">
                    <div class="tab-pane fade show active" id="tab5-{{iterator}}">
                      <div class="tab-card">
                        <div class="tab-pane-card">
                          <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                        </div>
                        <div class="tab-card-1">
                          <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                          <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                          <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                          <div><i class="fas fa-industry"></i> {{post.sector}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab6-{{iterator}}">
                      <div class="tab-card">
                        <div class="tab-card-1">
                          <div>
                            <i class="fas fa-phone"></i> 
                            <a href="tel:{{post.phone_number}}"> {{post.phone_number}}</a>
                          </div>
                          <div>
                            <i class="fas fa-globe"></i> 
                            <a href="https://{{post.website}}"> {{post.website}}</a>
                          </div>
                          <div>
                            <i class="fab fa-facebook-square"></i> 
                            <a href="https://www.facebook.com/{{post.facebook_user}}"> {{post.facebook_user}}</a>
                          </div>
                          <div>
                            <i class="fab fa-instagram"></i> 
                            <a href="https://instagram.com/{{post.instagram_user}}"> {{post.instagram_user}}</a>
                          </div>
                          <div>
                            <i class="fab fa-twitter"></i> 
                            <a href="https://twitter.com/{{post.twitter_user}}"> {{post.twitter_user}}</a>
                          </div>
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
                      <div><i class="fas fa-industry"></i> {{post.sector}}</div>
                    </div>
                  </div>
                </div>
                {% endif %}
              </div>
            </div>
          {% endfor %}
        </div>  
      </div> 
      <div class="col-lg-9" id="seccionEntradas">
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
                  <div class="tab-content line-break">
                    <div class="tab-pane fade show active" id="tab7-{{iterator}}">
                      <div class="tab-card">
                        <div class="tab-pane-card">
                          <img src="{{post.image | relative_url}}" alt="{{post.name}}" class="img-card">
                        </div>
                        <div class="tab-card-1">
                          <div><i class="fas fa-building"></i> {{post.name | capitalize}}</div>
                          <div><i class="fas fa-map-marker-alt"></i> {{post.address}}</div>
                          <div><i class="fas fa-bullhorn"></i> {{post.services}}</div>
                          <div><i class="fas fa-industry"></i> {{post.sector}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab8-{{iterator}}">
                      <div class="tab-card">
                        <div class="tab-card-1">
                          <div>
                            <i class="fas fa-phone"></i> 
                            <a href="tel:{{post.phone_number}}"> {{post.phone_number}}</a>
                          </div>
                          <div>
                            <i class="fas fa-globe"></i> 
                            <a href="https://{{post.website}}"> {{post.website}}</a>
                          </div>
                          <div>
                            <i class="fab fa-facebook-square"></i> 
                            <a href="https://www.facebook.com/{{post.facebook_user}}"> {{post.facebook_user}}</a>
                          </div>
                          <div>
                            <i class="fab fa-instagram"></i> 
                            <a href="https://instagram.com/{{post.instagram_user}}"> {{post.instagram_user}}</a>
                          </div>
                          <div>
                            <i class="fab fa-twitter"></i> 
                            <a href="https://twitter.com/{{post.twitter_user}}"> {{post.twitter_user}}</a>
                          </div>
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
                      <div><i class="fas fa-industry"></i> {{post.sector}}</div>
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

<script>
 function changeDropdownOption(dropdownId, optionText) { 
    const dropdown = document.getElementById(dropdownId);
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    dropdownToggle.innerHTML = optionText;
  }

  changeDropdownOption('dropdownEntradas', document.getElementById('navbarDropdownEntradas').innerHTML.trim());
  changeDropdownOption('dropdownOrdenar', document.getElementById('navbarDropdownOrdenar').innerHTML.trim());
</script>