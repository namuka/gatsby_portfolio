import React, { Component } from 'react';
import { graphql , Link , useStaticQuery } from 'gatsby';
import Container from '../components/container';
import Heading from '../components/heading';

export default ({data }) => {
  const project = data.allContentProject.nodes[0];

  return (
    <Container>
      <div id="project-detail">
        <Heading headingText={project.title} />
        <div className="text-center"><img src="https://source.unsplash.com/random/600x250" /></div>
        <div className="body">{project.body}</div>
        <Link to="/" className="btn btn-primary">Go Back</Link>
      </div>
    </Container>
  );
}

export const query = graphql`
query MyQuery($slug: String!) {
  allContentProject(filter: {slug: {eq: $slug}}) {
    nodes {
      title
      slug
      body
    }
  }
}
`;