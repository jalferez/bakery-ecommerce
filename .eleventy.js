module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  eleventyConfig.addPassthroughCopy("images");


  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addCollection("homebg", function (collectionApi) {
  return collectionApi.getFilteredByGlob("./content/homebg/*.md");
});
 
 eleventyConfig.addCollection("featured", function(collectionApi) {
  return collectionApi.getFilteredByGlob("content/featured/*.md");
});


  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};

