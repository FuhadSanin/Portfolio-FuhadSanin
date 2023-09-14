import React, { useState, useEffect } from "react"
import "./about.css"

function About() {
  const [show, setShow] = useState("education")

  const handle = e => {
    setShow(e)
  }
  return (
    <div id="about">
      <div className="col-1">
        <div className="img" data-aos="fade-right"></div>
      </div>
      <div className="col-2">
        <div className="col-2-data">
          <h1 data-aos="flip-up">
            About{" "}
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
          <p data-aos="fade-left">
            Hi there! My name is Fuhad Sanin and I'm a front-end web developer
            with expertise in HTML, CSS, JavaScript, and React.js. Over the
            years, I've built a number of websites and web applications, and I'm
            always looking for new challenges to tackle. <br />
            <br />
            Recently, I've been expanding my skillset to include Python for data
            science and artificial intelligence. I'm fascinated by the potential
            of AI to transform industries and improve people's lives, and I'm
            excited to be part of this rapidly evolving field. In my free time,
            I enjoy tinkering with new technologies and exploring the latest
            trends in web development and AI. <br />
            <br />
            If you have a project or idea that you'd like to collaborate on,
            please don't hesitate to get in touch! I'm always up for a new
            challenge and would love to hear from you.
          </p>
          <div className="tab-title">
            <h5
              className="tab-link active-link"
              onClick={() => handle("skill")}
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Skills
            </h5>
            <h5
              className="tab-link"
              onClick={() => handle("education")}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Education
            </h5>
            <h5
              className="tab-link"
              onClick={() => handle("certificate")}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Certificate
            </h5>
          </div>
          {show === "skill" ? (
            <div class="tab_content active-tab" data-aos="fade-up">
              hey
            </div>
          ) : (
            ""
          )}

          {show === "education" ? (
            <div class="tab_content">
              <ul>
                <li>
                  <span>High School</span>
                  <br />
                  Jeddah AHDAB Int. School
                </li>
                <li>
                  <span>HSS</span>
                  <br />
                  D.U.H.S.S Panakkad
                </li>
                <li>
                  <span>Btech of CSE</span>
                  <br />
                  2019-present
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          {show === "certificate" ? (
            <div class="tab_content">
              <ul>
                <li>
                  <span>CEC</span>
                  <br />
                  Designing Web/App interfaces
                </li>
                <li>
                  <span>JAJOS</span>
                  <br />
                  Designing Web/App interfaces
                </li>
                <li>
                  <span>App Development</span>
                  <br />
                  Designing Web/App interfaces
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default About
