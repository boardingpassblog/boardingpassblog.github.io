---
layout: section
title: Rutas - Terrestre
permalink: /rutas/terrestre/
---

{% 
  include ads/banner.html 
  content=site.data.ads.section-terrestre  
%}

{% include pages/title.html %}

<!-- blog post -->
<section class="section">
  <div class="container">
    <div class="row">
      {% for post in site.posts %}
      {% if post.categories contains 'rutas' %}
      {% if post.ruta contains 'terrestre' %}
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