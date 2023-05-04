import React from "react"
import "./Card.css"

export const Card = props => {
  return (
    <div id="Card">
      <div className="content">
        {props.img && <props.img className="icons" />}
        <h2>{props.title}</h2>
        <p>An small area for the discription about my skills</p>
      </div>
    </div>
  )
}
