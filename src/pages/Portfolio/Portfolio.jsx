import React, { useState } from "react"
import "./portfolio.css"
import Card from "./Cards/card"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import card1 from "../../image/cards/movie.png"
import card2 from "../../image/cards/cec.png"
import card3 from "../../image/cards/xo.png"
import card4 from "../../image/cards/old.jpg"
import card5 from "../../image/cards/iedc.png"
import card6 from "../../image/cards/counter.png"
import card7 from "../../image/cards/contacts.png"

import { movie, cec } from "./p"

const Portfolio = () => {
  const [state, setState] = useState(false)

  const handle = () => {
    setState(!state)
  }

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])
  return (
    <div id="portfolio">
      <div class="title" data-aos="zoom-out-up" data-aos-duration="1000">
        <h1>
          Portfol
          <span
            style={{
              color: "#2196f3",
              textShadow:
                "0px 0px 10px rgba(33, 150, 243, 0.25), 0px 0px 70px rgba(33, 150, 243, 0.3), 0px 0px 40px rgba(33, 150, 243, 0.25)",
            }}
          >
            io.
          </span>
        </h1>
      </div>

      <div class="cards">
        <div className="card-row" data-aos="flip-down" data-aos-duration="1000">
          <Card
            title="movie"
            img={card1}
            par={movie}
            s1="HTML"
            s2="React.js"
            s3="Firebase"
          />
          <Card title="IEDC" img={card5} s1="HTML" s2="CSS" s3="Vanta.js" />
        </div>
        <div className="card-row">
          <Card
            title="CEC"
            img={card2}
            par={cec}
            s1="HTML"
            s2="CSS"
            s3="Bootstrap"
          />
          <Card title="Tic-Tac-Toe" img={card3} s2="Java" />
        </div>
      </div>

      {state && (
        <div class="cards">
          <div className="card-row">
            <Card title="Counter" img={card6} />
            <Card title="pre-Portfolio" img={card4} />
          </div>
          <div className="card-row" data-aos="fade-up">
            <Card title="Contacts" img={card7} />
            <Card title="CEC" />
          </div>
        </div>
      )}

      <div className="show">
        <div className="btn">
          <button onClick={() => handle(!state)}>Show more</button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
