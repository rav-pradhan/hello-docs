module.exports = (nestedContent, heading) => (`
<details class="collapsible">
<summary class="collapsible__summary">${heading}</summary>
${nestedContent}
</details>
`)