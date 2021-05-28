const fs = require("fs")

module.exports = {
    eleventyComputed: {
        tocDetails: data => {
            if (data.toc || data.toc !== false) {
                const pageData = readData(data.page.inputPath);
                return buildTableOfContents(pageData)
            }
        },
    }
}

const readData = (path) => {
    return fs.readFileSync(path, 'utf8', (error, data) => {
        if (error) {
            console.error("ERROR PARSING PAGE DATA:", err)
            return
          }
          return data
    })
}

const buildTableOfContents = (content) => {
    const tocEntries = []
    const lines = content.split("\n")
    for (let line of lines) {
        const h2MarkdownMatcher = /^#{2}(?!#)(.*)/
        if (line.match(h2MarkdownMatcher)) {
            const entryLine = line.split("##")[1].trim()
            tocEntries.push({
                title: entryLine,
                link: `#${slugify(entryLine)}`
            })
        }
    }
    return tocEntries
}

const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}