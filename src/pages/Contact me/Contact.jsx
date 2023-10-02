import React from "react"
import "./Contact.css"
import { FaGithub, FaLinkedin, FaTwitter, FaPhone } from "react-icons/fa"
import { socialmedia } from "../../constants"

export const Contact = () => {
  return (
    <div id="Contact">
      <h1 data-aos="flip-up">
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
          <p>
            Thank you for visiting my website! I would love to hear from you and
            answer any questions you may have. Whether you're interested in may
            services, have a project you'd like to discuss, or just want to say
            hello, please feel free to reach out to us using the contact .{" "}
          </p>
          <div className="social-media">
            <a
              href={socialmedia[0].github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icons" />
            </a>
            <a
              href={socialmedia[0].linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icons" />
            </a>
            <a
              href={socialmedia[0].twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="icons" />
            </a>
            <a
              href={socialmedia[0].phone}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhone className="icons" />
            </a>
          </div>
        </div>
        <div className="col-2">
          <form
            action="https://formsubmit.co/el/confirm/269aa2ca52bb54a29137cbad1187de2f"
            method="POST"
          >
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
