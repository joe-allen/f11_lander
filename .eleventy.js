module.exports = (function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");

  return {
    dir: {
      output: "dist",
      input: "src"
    },
    templateFormats: ["njk", "md", "css", "js"]
  };

});