import React, { useState } from 'react'
import useLenis from './hooks/useLenis.js'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Properties from './components/Properties.jsx'
import Experience from './components/Experience.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [ready, setReady] = useState(false)
  useLenis()

  return (
    <>
      <Loader onComplete={() => setReady(true)} />

      <main
        className={`relative transition-opacity duration-1000 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Properties />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
