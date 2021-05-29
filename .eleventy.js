const minifyHTML = require("./src/transforms/minifyHTML");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const pluginPWA = require("eleventy-plugin-pwa");

const warning = require("./src/_includes/shortcodes/warning");
const collapsible = require("./src/_includes/shortcodes/collapsible");
const codeLine = require("./src/_includes/shortcodes/code-line");

const isProduction = process.env.NODE_ENV === "production";

module.exports = (config) => {
    if (isProduction) {
        config.addTransform("htmlmin", minifyHTML);
    }

    // Set Markdown config
    const markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
      }).use(markdownItAnchor, {
        permalink: true,
        permalinkBefore: true,
        permalinkSymbol: "#",
      });
      config.setLibrary("md", markdownLibrary);

    // Plugins
    config.addPlugin(syntaxHighlight);
    config.addPlugin(pluginPWA);
    
    // Build topics collection
    config.addCollection("topics", (collection) => {
        const topics = buildTopicsCollection(collection)
        return sortByField(topics, "position")
    });

    // Shortcodes
    config.addShortcode("warning", warning)
    config.addShortcode("code_line", codeLine)
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
            position: topic.data.position,
            chapters: buildChapterMetadata(topicChapters, topicID)
        }
    })
}

const buildChapterMetadata = (topicChapters, topicID) => {
    return topicChapters.map(chapter => {
        return {
            ID: topicID,
            title: chapter.data.title,
            url: chapter.url,
        }
    })
}

const sortByField = (topics = [], field = "") => {
    console.log(topics)
    return topics.sort((a, b) => {
        return a[field] - b[field]
    })
}