//require('dotenv').config({ path: '.env' })
module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    //`gatsby-transformer-sharp`,
    //`gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Simplefolio`,
        short_name: `Simplefolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCeSvYmAUGZ51P1MwwQJ7-szMa_zLocm2c",
          authDomain: "gatsby-portfolio-9ea98.firebaseapp.com",
          databaseURL: "https://gatsby-portfolio-9ea98-default-rtdb.firebaseio.com",
          projectId: "gatsby-portfolio-9ea98",
          storageBucket: "gatsby-portfolio-9ea98.appspot.com",
          messagingSenderId: "64092369336",
          appId: "1:64092369336:web:93b13bb7bcff5f3fecdf4d"
        },
        features: {
          firestore: true,
        }
      }
    },
    {
      resolve: "gatsby-source-firebase",
      options: {
        // point to the firebase private key downloaded
        credential: require("./firebase-key.json"),

        // your firebase database root url
        databaseURL: "https://gatsby-portfolio-9ea98-default-rtdb.firebaseio.com",

        // you can have multiple "types" that point to different paths
        types: [
          /*{
            // this type will become `allWorkshop` in graphql
            type: "ContentProject",

            // the path to get the records from
            path: "content-project",

            // probably don't want your entire database, use the query option
            // to limit however you'd like
            query: ref => ref.limitToLast(10),

            // This allows you to map your data to data that GraphQL likes:
            // 1. Turn your lists into actual arrays
            // 2. Fix keys that GraphQL hates. It doesn't allow number keys
            //    like "0", you'll get this error pretty often:
            //    Error: Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "0" does not
            // 3. Remove stuff you don't need.
            //
            // Feel free to mutate, we sent you a copy anyway.
            map: node => {
              // fix keys graphql hates
              node.nineteenEightyFive = node['1985']
              delete node['1985']

              // convert a child list to an array:
              return node.sessions = Object.keys(node.sessions).map(key => {
                return { _key: key, session: node.sessions[key] }
              })

              // finally, return the node
              return node
            },
          },*/

          // if you're data is really simple, this should be fine too
          {
            type: "ContentProject",
            path: "content-project",
          }
        ]
      }
    }
  ],
};
