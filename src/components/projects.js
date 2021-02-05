import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Container from './container';
import Heading from './heading';
import Project from './project';
import firebase from "gatsby-plugin-firebase"

export default function Projects(){
    
    const [data, setData] = React.useState(null)
    React.useEffect(() => {
        firebase
          .database()
          .ref("/content-project")
          .once("value")
          .then(snapshot => {
            setData(snapshot.val())
          })
      }, [])  

      const query = useStaticQuery(graphql`
      query {
          allContentProject {
             edges{
                  node {
                      title
                      excerpt
                      body    
                      slug
                  }      
              }       
          }    
      }
      `)
     
    return(
        <section id="projects">
            <Container>
                <Heading headingText="Projects" />
                { data ?
                    <React.Fragment>
                        {query.allContentProject.edges.map( (project, i)=> (
                            <Project key={i} indexOfRow={i} project={project.node} />
                        ))}
                    </React.Fragment>
                    : "Loading..."
                }
            </Container>
        </section>
    )
}

