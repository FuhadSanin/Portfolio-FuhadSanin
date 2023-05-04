import React from "react"
import "./VerticalLineRight.css"
import { FiGithub, FiLinkedin, FiTwitter, FiPhone } from "react-icons/fi"
import { FaHackerrank, FaBlogger } from "react-icons/fa"
export const VerticalLineRight = () => {
  return (
    <div id="lineR">
      <div className="line-links" data-aos="fade-up">
        <FiPhone className="icons" />
        <FiLinkedin className="icons" />
        <FiGithub className="icons" />
        <FiTwitter className="icons" />
        <FaBlogger className="icons" />
        <FaHackerrank className="icons" />
      </div>
    </div>
  )
}
