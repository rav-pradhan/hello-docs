---
title: "Collapsible"
metaDescription: "Collapsible"
layout: "layouts/doc.html"
---

A collapsible component can be used to show/hide information based on whether or not the user toggles it.

```md
{% raw %}{% collapsible 'Heading for collapsible section' %}
Details pertaining to this collapsible section present.

Regular Markdown can also be used here. _See?_

You could even add a small table...

| Name | Age | Favourite game |
|------|-----|----------------|
| Nina | 24  | Mario Kart 8   |
| Bob  | 22  | Bloodborne     |

{% endcollapsible %}
{% endraw %}
```

This will then render out the following:

{% collapsible 'Heading for collapsible section' %}
Details pertaining to this collapsible section present.

Regular Markdown can also be used here. _See?_

You could even add a small table...

| Name | Age | Favourite game |
|------|-----|----------------|
| Nina | 24  | Mario Kart 8   |
| Bob  | 22  | Bloodborne     |

{% endcollapsible %}
