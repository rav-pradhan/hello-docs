const test = require('ava')
const warning = require('../../src/_includes/shortcodes/warning')

test('that collapsible is correctly rendered', t => {
    const message = "Warning message here"
    const result = warning(message)
    
    const expected = `
<div class="warning">
<span class="warning__icon" aria-hidden="true">!</span>
<strong class="warning__text">Warning message here</strong>
</div>
`
    t.is(result, expected)
})