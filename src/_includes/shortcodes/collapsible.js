module.exports = (nestedContent, summary) => (`
<details class="collapsible">
<summary class="collapsible__summary">${summary}</summary>
<div class="collapsible__text">${nestedContent}</div>
</details>
`)