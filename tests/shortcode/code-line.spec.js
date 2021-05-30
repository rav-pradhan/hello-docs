const test = require('ava')
const codeLine = require('../../src/_includes/shortcodes/code-line')

test('that the code element is correctly rendered', t => {
    const input = "npm install test"
    const result = codeLine(input)
    t.is(result, `<div class="code-line">npm install test</div>`)
})

test('that the code element is correctly rendered when a number is passed', t => {
    const input = 123
    const result = codeLine(input)
    t.is(result, `<div class="code-line">123</div>`)
})

test('that it throws a type error when a non-string or number argument is passed', t => {
    const input = ["this is an array"]
    const error = t.throws(() => {
        codeLine(input)
    }, {instanceOf: TypeError});
    t.is(error.message, "Please pass either a string or number value")
})