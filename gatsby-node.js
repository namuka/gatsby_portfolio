exports.createPages = ({ graphql, boundActionCreators }) => {
  const path = require(`path`);
  const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
      graphql(`
        {
          allContentProject {
            edges {
              node {
                slug
              }
            }
          }
        }
      `  ).then(result => {
      result.data.allContentProject.edges.forEach(({ node }) => {
        createPage({
          path: `project/${node.slug}`,
          component: path.resolve(`./src/pages/projectDetail.js`),
          context: {
            slug: node.slug
          },
        })
      })
      resolve()
      })
    }).catch(error => {
      console.log(error)
      reject()
    })
  };