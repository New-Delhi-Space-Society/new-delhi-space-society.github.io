const ghPages = process.env.DEPLOY_TARGET === "gh-pages";
const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  future: {
    webpack5: true,
  },
  assetPrefix: ghPages ? "/new-delhi-space-society.github.io/" : "",
});
