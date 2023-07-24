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

<!-- blog post -->
<section class="section">
  <div class="container">
    <div class="row">
      {% for post in site.posts %}
      {% if post.categories contains 'directorio' %}
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
  </div>
</section>
<!-- /blog post -->