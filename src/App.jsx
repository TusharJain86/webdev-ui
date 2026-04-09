import Navbar from './components/navbar'
import Footer from './components/Footer'
import Home from './pages/home'
import Hero from './pages/hero'
import Report from './pages/Report'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route path="/" element={
          <>
            <Hero />
            <Home />
          </>
        } />

        {/* Report page */}
        <Route path="/Report" element={<Report />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App