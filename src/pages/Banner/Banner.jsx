import React from "react"
import "./Banner.css"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export const Banner = () => {
  return (
    <div id="Banner">
      <div className="main-left">
        <div className="col">
          <div className="col-socialmedia" data-aos="zoom-in-right">
            <a href="https://github.com/FuhadSanin">
              <FaGithub className="icons github" />
            </a>
            <a href="https://www.linkedin.com/in/fuhad-sanin-b469a3217">
              <FaLinkedin className="icons linkedin" />
            </a>
            <a href="">
              <FaTwitter className="icons twitter" />
            </a>
          </div>
          <div className="col-intro" data-aos="zoom-in-up">
            <h5>Hi I'm</h5>
            <h1 data-aos="zoom-in-up">Fuhad Sanin</h1>
            <h3>
              I'm a <span className="auto-type">React Developer</span>
            </h3>
            <button className="button">Resume</button>
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="img"></div>
      </div>
    </div>
  )
}
