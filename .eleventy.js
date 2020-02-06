module.exports = (function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy({"./node_modules/gsap/dist/gsap.min.js" : "js/min/gsap.min.js"});

  return {
    dir: {
      output: "dist",
      input: "src"
    },
    templateFormats: ["njk", "md", "css"]
  };

});