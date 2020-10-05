---
layout: archive
title: "Math and Statics Posts by Tags"
permalink: /math-stat/
author_profile: true
header: 
  images: "/images/sitemlphoto.jpg"
---

'''
{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %} '''

{% for post in site.posts %}

    {% include archive-single.html %}

{% endfor %}