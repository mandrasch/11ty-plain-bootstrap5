const pluginRss = require("@11ty/eleventy-plugin-rss"); // needed for absoluteUrl feature
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {

  // Set site title
  eleventyConfig.addGlobalData("site", {
    title: "11ty-plain-bs5"
  });

  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Copy dist/ files from laravel mix
  eleventyConfig.addPassthroughCopy("dist/"); // path is relative from root

  // Copy (static) files to output (_site)
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch for changes (and reload)
  eleventyConfig.addWatchTarget("./src/assets"); // normal (static) assets
  eleventyConfig.addWatchTarget("./dist") // laravel-mix output changes

  // Important for watch: Eleventy will not add a watch for files or folders that
  // are in .gitignore,unless setUseGitIgnore is turned off. See this chapter:
  // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets
  eleventyConfig.setUseGitIgnore(false);

  // RandomId function for IDs used by labelled-by
  // Thanks https://github.com/mozilla/nunjucks/issues/724#issuecomment-207581540
  // TODO: replace with addNunjucksGlobal? https://github.com/11ty/eleventy/issues/1498
  eleventyConfig.addFilter("generateRandomIdString", function (prefix) {
    return prefix + "-" + Math.floor(Math.random() * 1000000);
  });

  // Base Config
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "includes", // this path is releative to input-path (src/)
      layouts: "layouts", // this path is releative to input-path (src/)
      data: "data", // this path is releative to input-path (src/)
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };

  // OLD:

  // SASS (dart-sass) and postcss auto vendor prefixing
  // thanks to https://www.d-hagemeier.com/de/sass-compile-11ty/
  // auto prefixing is needed, see: https://getbootstrap.com/docs/5.0/getting-started/download/#source-files
  // We're using laravel-mix now
  /*eleventyConfig.on("beforeBuild", () => {

        const isProd = process.env.ELEVENTY_ENV === 'production';
        if (isProd) {
            console.log('Eleventy build is running on production mode');
        }

        // Compile Sass
        // TODO: don't use compressed for dev?
        let result = sass.renderSync({
            file: "src/assets/styles/main.scss",
            sourceMap: true,
            outputStyle: "compressed",
        });

        // Optimize and write file with PostCSS
        let css = result.css.toString();
        postcss([autoprefixer])
            .process(css, { from: "assets/styles/main.css", to: "asset/styles/main.css" })
            .then((result) => {
                fs.outputFile("_site/assets/styles/main.css", result.css, (err) => {
                    if (err) throw err;
                });
            });
    });*/



};
