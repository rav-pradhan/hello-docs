const minifyHTML = require("./src/transforms/minifyHTML");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const pluginPWA = require("eleventy-plugin-pwa");

const warning = require("./src/_includes/shortcodes/warning");
const collapsible = require("./src/_includes/shortcodes/collapsible");
const codeLine = require("./src/_includes/shortcodes/code-line");

const { DateTime } = require("luxon");

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

      // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    config.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd');
    });

    // Plugins
    config.addPlugin(syntaxHighlight);
    config.addPlugin(pluginPWA);
    config.addPlugin(pluginRss);

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
        return {
            ID: topic.fileSlug,
            title: topic.data.title,
            url: topic.url,
            position: topic.data.position,
            chapters: buildChapterMetadata(topicChapters)
        }
    })
}

const buildChapterMetadata = (chapters) => {
    const chapterNav = chapters.map(chapter => {
        return {
            title: chapter.data.title,
            url: chapter.url,
            position: chapter.data.position,
        }
    })
    const sortedChapterNav = sortByField(chapterNav, "position")

    return sortedChapterNav.map(chapter => {
        return {
            ...chapter,
            adjacentChapters: buildAdjacentChapters(sortedChapterNav, chapter.title)
        }
    })
}

const buildAdjacentChapters = (sortedChapters, chapterTitle) => {
    if (sortedChapters.length === 1) return

    for (const [index, chapter] of sortedChapters.entries()) {
        if (chapterTitle === chapter.title) {
            if (index === 0) {
                const nextChapter = sortedChapters[index + 1]
                return {
                    next: setAdjacentChapter(nextChapter)
                }
            } else if (index === sortedChapters.length - 1) {
                const previousChapter = sortedChapters[index - 1]
                return {
                    previous: setAdjacentChapter(previousChapter)
                }
            } else {
                const nextChapter = sortedChapters[index + 1]
                const previousChapter = sortedChapters[index - 1]
                return {
                    previous: setAdjacentChapter(previousChapter),
                    next: setAdjacentChapter(nextChapter)
                }
            }
        }
    }
}

const setAdjacentChapter = (chapter) => {
    return {
        title: chapter.title,
        url: chapter.url
    }
}

const sortByField = (array = [], field = "") => {
    return array.sort((a, b) => {
        return a[field] - b[field]
    })
}