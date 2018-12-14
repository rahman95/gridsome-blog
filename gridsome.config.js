// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "RYounus Blog",
  siteUrl: "https://www.blog.ryounus.co.uk",
  siteDescription: "RYounus Blog - Deep dives and hot takes 🔥",
  transformers: {
    remark: {}
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post"
      }
    }
  ]
};