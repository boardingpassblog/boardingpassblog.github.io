---
layout: section
title: Entérate
permalink: /enterate/
---

{% 
  include ads/banner.html 
  content=site.data.ads.ads_enterate.section-enterate  
%}

{% include pages/title.html %}

<!-- blog post -->
<section class="section">
  <div class="container maxw">
    <div class="row">
      <div class="col-lg-9">
        {% for post in site.posts %}
        {% if post.categories contains 'enterate' %}
        {% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
        {% if thecycle == 'odd' %}
        {% assign class = '' %}
        {% else %}
        {% assign class = 'article-right' %}
        {% endif %}
          {% include pages/article.html %}
        {% endif %}
        {% endfor %}
      </div>
      <div class="col-lg-3">
        {% 
          include ads/banner.html 
          content=site.data.ads.ads_enterate.sidebar_enterate-0 
        %}
        {% assign contendorId = "destacados-container-1"%}
        {% include destacado.html contendorId=contendorId %}
        {% 
          include ads/banner.html 
          content=site.data.ads.ads_enterate.sidebar_enterate-1  
        %}
        {% include recientes.html %}
        {% 
          include ads/banner.html 
          content=site.data.ads.ads_enterate.sidebar_enterate-2
        %}
        {% assign contendorId = "destacados-container-2"%}
        {% include destacado.html contendorId=contendorId %}
        {% 
          include ads/banner.html 
          content=site.data.ads.ads_enterate.sidebar_enterate-3
        %}
        {% include secciones.html %}
        {% 
          include ads/banner.html 
          content=site.data.ads.ads_enterate.sidebar_enterate-4
        %}
        {% assign contendorId = "destacados-container-3"%}
        {% include destacado.html contendorId=contendorId %}
        {% 
          include ads/banner.html 
          content=site.data.ads.ads_enterate.sidebar_enterate-5
        %}
        {% include feed-twitter.html %}
      </div> 
    </div>
  </div>
</section>
<!-- /blog post -->

