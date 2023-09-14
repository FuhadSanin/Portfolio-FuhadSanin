import React from "react"
import "./Tech.css"
import { technologies } from "../../constants"
import BallCanvas from "./Ball"

const Tech = () => {
  return (
    <div className="Tech">
      <div className="Tech-container">
        {technologies.map(technology => (
          <div className="ball-size"  key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tech
