import React from 'react';
import Container from './container';
import firebase from "gatsby-plugin-firebase"
import { Link } from 'react-scroll';

export default function Hero(){
   
    const [data, setData] = React.useState(null)
    React.useEffect(() => {
        firebase
          .database()
          .ref("/content-hero")
          .once("value")
          .then(snapshot => {
            setData(snapshot.val())
          })
      }, [])     

    return(
        <section id="hero">
            <Container>
                <h1>{data ? <React.Fragment>{data.greeting} <span>{data.name}</span> <br/>{data.body}</React.Fragment>  : "Loading..."}</h1>                
                <Link to="about" smooth duration={1000} className="btn">Know more</Link>
            </Container>
        </section>
    )
}