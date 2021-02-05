import React, { Component } from 'react';
import Container from './container';
import Heading from './heading';

export default function Contact(){
    return(
        <section id="contact">
           <Container>
            <Heading headingText="Get In Touch" />
            <div>Would you like to work with me? Awesome!</div>
           </Container>            
        </section>
    )
}