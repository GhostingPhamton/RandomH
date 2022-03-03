require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const queriess = require("./src/utils/algolia");

module.exports = {
  siteMetadata: {
    title: "RamdonHGamer",
    description: "HHHH ",
    author: "RamdonHGamer",
    siteUrl: `https://ramdonhgamer.ga`,
    image: "src/images/RamdonH.png",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,

        accessToken: process.env.CONTENTFUL_ACCES_TOKEN,
        enableTags: true,
      },
    },

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.randomhgamer.ga/",
        sitemap: "https://www.randomhgamer.ga/sitemap.xml",
      },
    },

    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        // Careful, no not prefix this with GATSBY_, since that way users can change
        // the data in the index.
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries: queriess,
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
        },
        enablePartialUpdates: true, // default: false
        matchFields: ["slug", "descripcion", "imagen", "title"],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
  ],
};
