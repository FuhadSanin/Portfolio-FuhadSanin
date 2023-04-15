import React from 'react'
import './App.css'
import {Navbar} from './components/Navbar/Navbar'
import {Vanta} from './pages/Banner/Vanta'
export const App = () => {
  return (
    <div>
      <Navbar/>
      <Vanta/>
    </div>
  )
}
