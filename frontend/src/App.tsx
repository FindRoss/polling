import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import PollButton from './components/PollButton'

// import { OwnedObjects } from './components/OwnedObjects'


function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <Hero />
        <PollButton />
        {/* <OwnedObjects /> */}
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App
