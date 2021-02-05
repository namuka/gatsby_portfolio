import React from 'react';
import { Link } from 'gatsby';

export default function ProjectDetailLink(props){
   return(
    <Link to={`/project/${props.project.slug}`} className="btn btn-primary">View Detail</Link>
   )
}