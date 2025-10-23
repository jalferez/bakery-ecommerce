module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("videos");



  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addCollection("homebg", function (collectionApi) {
  return collectionApi.getFilteredByGlob("./content/homebg/*.md");
});
 
 eleventyConfig.addCollection("featured", function(collectionApi) {
  return collectionApi.getFilteredByGlob("content/featured/*.md");
});

eleventyConfig.addCollection("menuhero", function(collectionApi) {
  return collectionApi.getFilteredByGlob("content/menuhero/*.md");
});

eleventyConfig.addCollection("categories", function(collectionApi) {
  return collectionApi.getFilteredByGlob("content/categories/*.md");
});


eleventyConfig.addCollection("menu", function(collectionApi) {
  return collectionApi.getFilteredByGlob("content/menu/*.md");
});



  return {
    dir: {
      input: "pages",
      includes: "../_includes",
      output: "_site"
    }
  };
};

