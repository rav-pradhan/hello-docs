module.exports = (warningMessage) => (`
<div class="warning">
<span class="warning__icon" aria-hidden="true">!</span>
<strong class="warning__text">${warningMessage}</strong>
</div>
`)