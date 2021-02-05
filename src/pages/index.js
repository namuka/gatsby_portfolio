import React from "react"
import About from "../components/about"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Projects from "../components/projects"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/main.css'

function Home(){    
    return (
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    )
}

export default Home