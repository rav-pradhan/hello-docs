const fs = require("fs")

module.exports = {
    eleventyComputed: {
        tocDetails: async data => {
            if (data.toc || data.toc !== false) {
                const pageData = readData(data.page.inputPath);
                return buildTableOfContents(pageData)
            }
        }
    }
}

const readData = (path) => {
    return fs.readFileSync(path, 'utf8', (error, data) => {
        console.log("PATH:", path)
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
        if (line.includes("##")) {
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