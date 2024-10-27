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
  ],
};