---
layout: section
title: Salte del radar
permalink: /salte-del-radar/
---

{% 
  include ads/banner.html 
  content=site.data.ads.ads_salte-del-radar.section-salte-del-radar 
%}

{% include pages/title.html %}

<!-- blog post -->
<section class="section">
  <div class="container maxw">
    <div class="row">
      <div class="col-lg-9">
        {% for post in site.posts %}
        {% if post.categories contains 'salte-del-radar' %}
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
					include sidebar.html 
					banner0=site.data.ads.ads_salte-del-radar.sidebar_salte-del-radar-0
					banner1=site.data.ads.ads_salte-del-radar.sidebar_salte-del-radar-1
					banner2=site.data.ads.ads_salte-del-radar.sidebar_salte-del-radar-2
					banner3=site.data.ads.ads_salte-del-radar.sidebar_salte-del-radar-3
					banner4=site.data.ads.ads_salte-del-radar.sidebar_salte-del-radar-4
					banner5=site.data.ads.ads_salte-del-radar.sidebar_salte-del-radar-5
				%}
      </div> 
    </div>
  </div>
</section>
<!-- /blog post -->