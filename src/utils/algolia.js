const postQuery = `
query postQuery {
    allContentfulBlogs(
        limit: 4
      ) {
        edges {
          node {
            id
            title
            slug
            imagen {
              gatsbyImageData(width: 360)
              file {
                url
              }
            }
            descripcion {
              descripcion
            }
          }
        }
      }
}`;

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) =>
      data.allContentfulBlogs.edges.map(({ node }) => node), // optional
    indexName: "RandomHSearch", // overrides main index name, optional
    settings: {
      // optional, any index settings
    },
  },
];

module.exports = queries;
