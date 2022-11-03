// SPDX-FileCopyrightText: 2022 Glasswings
//
// SPDX-License-Identifier: AGPL-3.0-or-later

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css/*.css");
    eleventyConfig.addPassthroughCopy("font/*.woff");

    eleventyConfig.addCollection('tech', collection =>
        [...collection.getFilteredByGlob('./src/tech/*')]
    );

    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
    });

    eleventyConfig.addNunjucksFilter("getVar", function(name) {
        return this.ctx[name];
    });

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "_site"
        },
    };
};
