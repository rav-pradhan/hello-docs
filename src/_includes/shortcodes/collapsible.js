module.exports = (nestedContent, heading) => (`
<details class="collapsible">
<summary class="collapsible__summary">${heading}</summary>
<div class="collapsible__text">${nestedContent}</div>
</details>
`)