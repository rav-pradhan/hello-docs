---
title: "Collapsible"
---
## Usage

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

## Example

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

Multiple collapsibles can also be used consecutively to create an accordion style component:

```md
{% raw %}{% collapsible 'Section One' %}
Details pertaining to Section One.
{% endcollapsible %}

{% collapsible 'Section Two' %}
Details pertaining to Section Two.
{% endcollapsible %}

{% collapsible 'Section Three' %}
Details pertaining to Section Three.
{% endcollapsible %}
{% endraw %}
```

{% collapsible 'Section One' %}
Details pertaining to Section One.
{% endcollapsible %}

{% collapsible 'Section Two' %}
Details pertaining to Section Two.
{% endcollapsible %}

{% collapsible 'Section Three' %}
Details pertaining to Section Three.
{% endcollapsible %}

It should make no difference whether you include spacing between your collapsible shortcodes; the styling should ensure that each subsequent collapsible is styled appropriately.
