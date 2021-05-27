const minifyHTML = require("./src/transforms/minifyHTML");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const pluginPWA = require("eleventy-plugin-pwa");

const warning = require("./src/_includes/shortcodes/warning");
const collapsible = require("./src/_includes/shortcodes/collapsible");

const isProduction = process.env.NODE_ENV === "production";

module.exports = (config) => {
    if (isProduction) {
        config.addTransform("htmlmin", minifyHTML);
    }

    // Plugins
    config.addPlugin(syntaxHighlight);
    config.addPlugin(pluginPWA);
    
    // Build topics collection
    config.addCollection("topics", (collection) => {
        const topics = buildTopicsCollection(collection)
        return sortAlphabeticallyByField(topics, "ID")
    });

    // Shortcodes
    config.addShortcode("warning", warning)
    config.addPairedShortcode("collapsible", collapsible)

    // Misc config
    config.setUseGitIgnore(false);

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