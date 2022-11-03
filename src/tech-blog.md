---
SPDX-FileCopyrightText: 2022 Glasswings
SPDX-License-Identifier: AGPL-3.0-or-later

permalink: "tech/"

title: "/tech"
layout: "layout/page.html"
---
{% for post in collections.tech %}

-   [{{ post.data.title }}]({{ post.url }})

{% if post.data.page.excerpt %}
{{ post.data.page.excerpt | safe }}
{% endif %}
{% endfor %}
