---
layout: section
title: Opinión
permalink: /opinion/
---

{% 
  include ads/banner.html 
  content=site.data.ads.ads_opinion.section-opinion 
%}

{% include pages/title.html %}

<!-- blog post -->
<section class="section">
  <div class="container maxw">
    <div class="row">
      <div class="col-lg-9">
        {% for post in site.posts %}
        {% if post.categories contains 'opinion' %}
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
					banner0=site.data.ads.ads_opinion.sidebar_opinion-0
					banner1=site.data.ads.ads_opinion.sidebar_opinion-1
					banner2=site.data.ads.ads_opinion.sidebar_opinion-2
					banner3=site.data.ads.ads_opinion.sidebar_opinion-3
					banner4=site.data.ads.ads_opinion.sidebar_opinion-4
					banner5=site.data.ads.ads_opinion.sidebar_opinion-5
				%}
      </div> 
    </div>
  </div>
</section>
<!-- /blog post -->