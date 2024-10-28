module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
    description: "I am playing out with Graphiql with Gatsby"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "	GTM-TJ8CNV7B",
        includeInDevelopment: true,
        defaultDataLayer: function () {
          return {
            pageType: window.pageType,
          }
        },
      },
    },
    "gatsby-plugin-mdx",
  ]
};