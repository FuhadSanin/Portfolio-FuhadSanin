import React from "react"
import "./Footer.css"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div id="Footer">
      <div className="left">
        <p>© Fuhad Sanin, All Right Reserved</p>
      </div>
      <div className="right">
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
    </div>
  )
}

export default Footer