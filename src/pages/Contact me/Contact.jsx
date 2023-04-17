import React from "react"
import "./Contact.css"
import { FaGithub, FaLinkedin, FaTwitter ,FaPhone} from "react-icons/fa"

export const Contact = () => {
  return (
    <div id="Contact">
      <h1 data-aos="fade-right">
        Contact
        <span
          style={{
            color: "#2196f3",
            textShadow:
              "0px 0px 1px rgba(33, 150, 243, 0.25), 0px 0px 70px rgba(33, 150, 243, 0.3), 0px 0px 40px rgba(33, 150, 243, 0.25)",
          }}
        >
          me.
        </span>
      </h1>
      <div className="details">
        <div className="col-1">
          <h1>Get in touch</h1>
          <p>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't </p>
          <div className="social-media">
            <FaGithub className="icons" />
            <FaLinkedin className="icons" />
            <FaTwitter className="icons" />
            <FaPhone className="icons" />
          </div>
        </div>
        <div className="col-2">
          <form>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea rows="4" placeholder="Message" />
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
