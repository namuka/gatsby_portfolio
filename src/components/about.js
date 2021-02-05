import React, { Component } from 'react';
import Container from './container';
import Heading from './heading';
import firebase from "gatsby-plugin-firebase"

export default function About(){
        
    const [data, setData] = React.useState(null)
    React.useEffect(() => {
        firebase
          .database()
          .ref("/content-about")
          .once("value")
          .then(snapshot => {
            setData(snapshot.val())
          })
      }, [])    

    return(
        <section id="about">
            <Container>                
                {data ? 
                    <React.Fragment>
                    <Heading headingText={data.title} />
                    <div className="row">
                        <div className="col-4"><img src="http://picsum.photos/300" alt="About me" /></div>
                        <div className="col-8 ta-justify">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit sem sed laoreet consequat. Integer in vehicula lacus. Sed placerat luctus felis, ut hendrerit dolor. Mauris egestas scelerisque feugiat. In vitae vestibulum enim. Quisque sem eros, maximus id efficitur non, suscipit quis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus ultrices nibh, id rutrum orci semper eu. Fusce quis ultricies est, et dignissim neque. Integer augue lacus, rhoncus nec scelerisque a, ultricies eget urna.</p>
                            <p>Quisque eu eros lobortis, bibendum risus nec, maximus massa. Nam imperdiet ligula lorem, vel hendrerit tortor ornare sit amet. Phasellus nunc lectus, congue sit amet felis efficitur, vehicula consequat magna. Curabitur rhoncus dignissim dolor a efficitur. Donec consectetur ipsum at enim consectetur posuere vitae eu sapien. Quisque augue ex, gravida ac dui id, aliquet feugiat odio. Ut id congue sem. Donec vitae erat turpis. Aliquam vulputate, mauris dapibus auctor porta, dui diam cursus odio, et vestibulum mauris diam euismod ligula. Sed convallis, sem in maximus commodo, erat turpis fermentum urna, efficitur auctor lectus mauris sit amet nisi. Nam nec ligula vel urna vulputate luctus. Proin non vulputate erat. Nullam rhoncus pharetra mollis. Aliquam dictum in enim in sollicitudin. Vivamus blandit lectus vitae purus interdum fringilla. Aliquam erat volutpat.</p>
                        </div>
                    </div>
                    </React.Fragment>
                    : "Loading..."
                }
            </Container>
        </section>
    )
}