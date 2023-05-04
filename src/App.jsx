import React from "react"
import "./App.css"
import { Navbar } from "./components/Navbar/Navbar"
import { Vanta } from "./pages/Banner/Vanta"
import Portfolio from "./pages/Portfolio/Portfolio"
import About from "./pages/About/About"
import { useState, useEffect } from "react"
import PropagateLoader from "react-spinners/PropagateLoader"
import { Contact } from "./pages/Contact me/Contact"
import { Footer } from "./pages/Footer/Footer"
import { Skills } from "./pages/Skills/Skills"
import { Scroll } from "./components/Scrolls/Scroll"
import { VerticalLineLeft } from "./components/VerticalLineLeft/VerticalLineLeft"
import { VerticalLineRight } from "./components/VerticalLineRight/VerticalLineRight"
export const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <PropagateLoader color={"#00abf0"} loading={loading} size={30} />
        </div>
      ) : (
        <div className="margin">
          <Navbar />
          <VerticalLineLeft/>
          <VerticalLineRight/>
          <Scroll/>
          <Vanta />
          <Portfolio />
          <About />
          <Skills />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  )
}
