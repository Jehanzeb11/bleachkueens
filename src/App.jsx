import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import MainLineup from './components/MainLineup'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <main className='min-h-screen overflow-hidden'>
        <Navbar />
        <HeroSection />
      </main>
      <About />
      <MainLineup />
      <Contact />
      <Footer />
    </>
  )
}

export default App
