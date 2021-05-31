const fs = require("fs")

module.exports = {
    eleventyComputed: {
        tocDetails: data => {
            if (fileIsAChapter(data)) {
                const pageData = readData(data.page.inputPath);
                return buildTableOfContents(pageData)
            }
        },
        topicID: data => {
            if (fileIsAChapter(data)) {
                return buildTopicID(data.page.filePathStem)
            }
        }
    }
}

const fileIsAChapter = (data) => {
    return data.toc || data.toc !== false
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

const buildTopicID = (filePathStem) => {
    return slugify(filePathStem.split("/")[2])
}

const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}