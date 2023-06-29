import React from "react"
import "./Banner.css"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import { Typewriter } from "react-simple-typewriter"

export const Banner = () => {
  return (
    <div id="Banner">
      <div className="main-left">
        <div className="col">
          <div className="col-socialmedia" data-aos="zoom-in-right">
            <a href="https://github.com/FuhadSanin">
              <FiGithub className="icons github" />
            </a>
            <a href="https://www.linkedin.com/in/fuhad-sanin-b469a3217">
              <FiLinkedin className="icons linkedin" />
            </a>
            <a href="">
              <FiTwitter className="icons twitter" />
            </a>
          </div>
          <div className="col-intro">
            <h5 data-aos="fade-in">Hi I'm</h5>
            <h1 data-aos="flip-up" data-aos-duration="2000">Fuhad Sanin</h1>
            <h3 data-aos="flip-up">
              I'm a{" "}
              <span className="auto-type">
                {" "}
                <Typewriter
                  words={["React Developer", "Web Designer", "Cinematographer"]}
                  loop={5}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h3>
            <button className="button" data-aos="flip-down">
              Resume
            </button>
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="img"></div>
      </div>
    </div>
  )
}
