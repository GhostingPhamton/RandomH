var path = require("path");

const { paginate } = require("gatsby-awesome-pagination");

var _ = require("lodash");

const PAGE_SIZE = 9;

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogtemplate = path.resolve("./src/Templates/blogtemplate.jsx");
  const blogListTemplate = path.resolve(`src/Templates/BlogList.js`);

  const result = await graphql(`
    {
      allContentfulBlogs(limit: 100) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  let chunks = _.chunk(result.data.allContentfulBlogs.edges, PAGE_SIZE);
  const posts = result.data.allContentfulBlogs.edges;
  const numPages = Math.ceil(posts.length / PAGE_SIZE);

  chunks.forEach((chunk, index) => {
    if (index == 0) {
      createPage({
        path: `BlogList`,
        component: blogListTemplate,
        context: {
          skip: PAGE_SIZE * index,
          limit: PAGE_SIZE,
          pageNumber: index + 1,
          hasNextPage: index != chunks.length - 1,
          nextPageLink: `/BlogList/${index + 2}`,

          numPages,
        },
      });
    }
    createPage({
      path: `BlogList/${index + 1}`,
      component: blogListTemplate,
      context: {
        skip: PAGE_SIZE * index,
        limit: PAGE_SIZE,
        pageNumber: index + 1,
        hasNextPage: index != chunks.length - 1,
        nextPageLink: `/BlogList/${index + 2}`,
        hasPrevious: index != 0,
        previousPageLink: `/BlogList/${index--}`,
        isOne: index != 1,

        numPages,
      },
    });
  });

  result.data.allContentfulBlogs.edges.forEach((edge) => {
    createPage({
      path: edge.node.slug,
      component: blogtemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
