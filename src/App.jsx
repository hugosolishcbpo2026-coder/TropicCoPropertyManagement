import { useState } from 'react'
import { useLenis } from './hooks/useLenis'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Properties from './components/Properties'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [, setLoaded] = useState(false)
  useLenis()

  return (
    <div className="relative min-h-screen bg-ink-950 text-ivory overflow-x-hidden">
      <Loader onComplete={() => setLoaded(true)} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Properties />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
