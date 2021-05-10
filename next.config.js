const ghPages = process.env.DEPLOY_TARGET === "gh-pages";

module.exports = {
  future: {
    webpack5: true,
  },
  assetPrefix: ghPages ? "/new-delhi-space-society.github.io/" : "",
};
