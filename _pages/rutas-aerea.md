---
layout: section
title: Rutas - Aérea
permalink: /rutas/aerea/
---

{% 
  include ads/banner.html 
  content=site.data.ads.section-aerea  
%}

{% include pages/title.html %}

<!-- blog post -->
<section class="section">
  <div class="container">
    <div class="row">
      {% for post in site.posts %}
      {% if post.categories contains 'rutas' %}
      {% if post.ruta contains 'aerea' %}
      {% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
      {% if thecycle == 'odd' %}
      {% assign class = '' %}
      {% else %}
      {% assign class = 'article-right' %}
      {% endif %}
        {% include pages/article.html %}
      {% endif %}
      {% endif %}
      {% endfor %}
    </div>
  </div>
</section>
<!-- /blog post -->