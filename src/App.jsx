import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import MainLineup from './components/MainLineup'

function App() {

  return (
    <>
    <main className='min-h-screen overflow-hidden'>
    <Navbar />
    <HeroSection />
    </main>
    <About />
    <MainLineup />
    </>
  )
}

export default App
