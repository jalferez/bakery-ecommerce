module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  eleventyConfig.addPassthroughCopy("images");


  eleventyConfig.addPassthroughCopy("admin");

 
  eleventyConfig.addCollection("bread", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/bread/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};

