import React, { useRef, useState } from "react"
import "./Contact.css"
import { toast, Toaster } from "react-hot-toast"
import emailjs from "@emailjs/browser"
import { FaGithub, FaLinkedin, FaTwitter, FaPhone } from "react-icons/fa"
import { socialmedia } from "../../constants"

const Contact = () => {
  const formRef = useRef()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  })

  const handleFormSubmit = event => {
    event.preventDefault()
    emailjs
      .send(
        "service_gh178wc",
        "template_s09tamk",
        {
          from_name: formData.name,
          to_name: "Sanin",
          from_email: formData.email,
          to_email: "fuhadsanin@gmail.com",
          msg: formData.msg,
          email: formData.email,
        },
        "3VJjJlQ-x0WtTXpqs"
      )
      .then(result => {
        if (formData.name && formData.msg && formData.email) {
          toast.success("Successfully sent!")
        } else {
          toast.error("Please fill out all required fields.")
        }
        setFormData({
          name: "",
          email: "",
          msg: "",
        })
      })
  }
  // service_b7aditv
  // hQBCj-2MI90tn5j5B
  // template_5g1rffi

  const handleInputChange = event => {
    const { id, value } = event.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }
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
          <form ref={formRef} onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Your name"
              id="name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              rows="4"
              placeholder="Message"
              id="msg"
              required
              value={formData.msg}
              onChange={handleInputChange}
            />
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact
