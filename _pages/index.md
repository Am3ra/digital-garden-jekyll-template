---
layout: page
title: Home
id: home
permalink: /
---

# Welcome to Alan Macedos Mind Garden!! 🌱

<p class="blockquote" style="padding: 3em 1em;  border-radius: 4px;">
  Take a look at my <span style="font-weight: bold">[[personal philosophy]]</span> to get started on your exploration of my thoughts!
</p>

If you want to read about me, personally, look at my [[life story]].

Most notes aren't completed and are marked [[seedling]], but you might find some notes that are more polished in my [[evergreen]] section!

## Here are my latest posts:

<ul class="entries">
	{% assign notes = site.notes | sort:"last_modified_at" %}
	{% for post in notes  limit:5 %}
	<li>
		<a href="{{ site.baseurl }}{{ post.url }}">
		<h3>{{ post.title }}</h3>
		</a>
	</li>
	{% endfor %}
</ul>


<style>
  .wrapper {
    max-width: 46em;
  }

  .entries li a{
	  display:inline-block;
  }
  .entries li a h3{
	  display:inline-block;
  }
</style>

