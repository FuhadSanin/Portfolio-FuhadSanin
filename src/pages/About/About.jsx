import React, { useState, useEffect } from "react"
import "./about.css"

function About() {
  const [show, setShow] = useState("skill")

  const handle = e => {
    setShow(e)
  }
  return (
    <div id="about">
      <div className="col-1">
        <div className="img" data-aos="zoom-out-up"></div>
        <div className="sm-img" data-aos="fade-right"></div>
      </div>
      <div className="col-2">
        <div className="col-2-data">
          <h1 data-aos="zoom-out-up">
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
          <p data-aos="fade-right">
            here are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable.
          </p>
          <div className="tab-title" >
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
              <ul>
                <li>
                  <span>UI/UX</span>
                  <br />
                  Designing Web/App interfaces
                </li>
                <li>
                  <span>Web Development</span>
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
