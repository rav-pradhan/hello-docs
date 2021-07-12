const test = require('ava')
const directory = require('../../src/_includes/shortcodes/directory')

// test('that a single level directory is created', t => {
//     const input = 
// `- src/
// `

//     const result = directory(input)
//     const expected = `src/`
    
//     t.is(result, expected)
// })

// test('that multiple single level directories are created', t => {
//     const input = 
// `- src/
// - dist/
// - public/`

//     const result = directory(input)
//     const expected = 
// `src/
// dist/
// public/`
    
//     t.is(result, expected)
// })

test('that a single directory with one nested file can be created', t => {
    const input = 
    `
- src/
    - test.rb
    `

    const result = directory(input)
    const expected =
`src/
├─ test.rb`

    t.is(result, expected)
})

test('that a single directory with two nested files can be created', t => {
    const input = 
    `
- src/
    - test.rb
    - test2.rb
    `

    const result = directory(input)
    const expected =
`src/
├─ test.rb
├─ test2.rb`

    t.is(result, expected)
})

test('that two directories with a nested file each can be created', t => {
    const input = 
    `
- src/
    - test.rb
- dist/
    - test.rb
`

    const result = directory(input)
    const expected =
`src/
├─ test.rb
dist/
├─ test.rb`


    t.is(result, expected)
})

test('that a directory with multiple nested files can be created', t => {
    const input = 
    `
- src/
    - test.rb
    - mock/
        - mockTest.rb
`

    const result = directory(input)
    const expected =
`src/
├─ test.rb
├─ mock/
│  ├─ mockTest.rb`


    t.is(result, expected)
})
