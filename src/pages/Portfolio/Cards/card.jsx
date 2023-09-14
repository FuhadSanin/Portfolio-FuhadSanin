import React from "react"
import "./card.css"
import { FaGithub, FaTelegram } from "react-icons/fa"

const card = props => {
  return (
    <div id="card" data-aos="flip-up" data-aos-duration="1000">
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <div className="details">
        <h3>{props.title}</h3>
        <div className="par">
          <p>{props.par}</p>
        </div>
        <h6
          style={{
            color: "white",
            paddingBottom: "10px",
            marginBottom: "0px",
            fontSize: "17px",
          }}
        >
          Stack
        </h6>
        <div className="btn">
          {props.s1 && <button>{props.s1}</button>}
          {props.s2 && <button>{props.s2}</button>}
          {props.s3 && <button>{props.s3}</button>}
        </div>
        <div className="link">
          <a href="https://moviesanin.netlify.app">
            <FaGithub className="icons github" />
          </a>
          <a href="https://fuhadsanin.github.io/collegesitecec/">
            <FaTelegram className="icons telgram" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default card
