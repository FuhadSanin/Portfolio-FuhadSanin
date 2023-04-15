import React from 'react'
import { useState, useEffect, useRef } from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'
import { Banner } from './Banner'

export const Vanta = () => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          WAVES({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            waveHeight: 5.00,
            waveSpeed: 0.55,
            color: 0xd1b
          
          })
        )
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    return (
      <div ref={myRef} className='Vanta'>
        <Banner/>
      </div>  )
}
