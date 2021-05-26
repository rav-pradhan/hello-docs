const minifyHTML = require("./src/transforms/minifyHTML");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const warning = require("./src/_includes/shortcodes/warning");
const isProduction = process.env.NODE_ENV === "production";

module.exports = (config) => {
    if (isProduction) {
        config.addTransform("htmlmin", minifyHTML);
    }

    config.addPlugin(syntaxHighlight);
    config.addPassthroughCopy("vendor");

    config.addCollection("topics", (collection) => {
        const topics = buildTopicsCollection(collection)
        return sortAlphabeticallyByField(topics, "ID")
    });

    config.setUseGitIgnore(false);
    config.addShortcode("warning", warning)

    return {
        dataTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "dist",
        },
    };
};

const buildTopicsCollection = (collection) => {
    return collection.getFilteredByGlob('./src/docs/**/index.md').map(topic => {
        const topicChapters = collection.getFilteredByGlob(`./src/docs/${topic.fileSlug}/**.md`).filter(chapter => {
            return topic.fileSlug !== chapter.fileSlug
        })
        const topicID = topic.inputPath.split("/")[3]
        return {
            ID: topicID,
            title: topic.data.title,
            url: topic.url,
            chapters: buildChapterMetadata(topicChapters, topicID)
        }
    })
}

const buildChapterMetadata = (topicChapters, topicID) => {
    return topicChapters.map(chapter => {
        return {
            ID: topicID,
            title: chapter.data.title,
            url: chapter.url
        }
    })
}

const sortAlphabeticallyByField = (topics = [], field = "") => {
    return topics.sort((a, b) => {
        return a[field].localeCompare(b[field])
    })
}