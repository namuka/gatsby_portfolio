import React, { Component } from 'react';

export default function Project(props){
    const project = props.project;
    return(
        <div className="project-item">
           
            <div className="row mb-5">
                {props.indexOfRow%2==0 ?                 
                    <React.Fragment>
                        <div className="col-7">
                            <h3>{project.title}</h3>
                            <p>{project.excerpt}</p>
                           
                        </div>
                        <div className="col-5"><img src="https://source.unsplash.com/random/400x200" /></div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <div className="col-5"><img src="https://source.unsplash.com/random/400x200" /></div>
                        <div className="col-7">
                            <h3>{props.project.title}</h3>
                            <p>{props.project.excerpt}</p>
                        </div>                
                    </React.Fragment>
                }
                
            </div>
        </div>
    )
}