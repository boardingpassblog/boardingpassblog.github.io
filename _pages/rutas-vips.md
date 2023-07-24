---
layout: section
title: Rutas - VIP's
permalink: /rutas/vips/
---

{% 
  include ads/banner.html 
  content=site.data.ads.section-vips  
%}

{% include pages/title.html %}

<!-- blog post -->
<section class="section">
  <div class="container">
    <div class="row">
      {% for post in site.posts %}
      {% if post.categories contains 'rutas' %}
      {% if post.ruta contains 'vips' %}
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