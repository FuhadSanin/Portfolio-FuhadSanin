import React from "react"
import "./App.css"
import { Navbar } from "./components/Navbar/Navbar"
import { Vanta } from "./pages/Banner/Vanta"
import Portfolio from "./pages/Portfolio/Portfolio"
import About from "./pages/About/About"
export const App = () => {
  return (
    <div>
      <Navbar />
      <Vanta />
      <Portfolio />
      <About />
    </div>
  )
}
