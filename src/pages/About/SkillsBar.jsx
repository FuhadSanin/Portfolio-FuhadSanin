import React from "react"
import "./SkillsBar.css"

function SkillsBar() {
  return (
    <div className="container">
      <div className="skill-box">
        <span className="title">Python</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="tooltip">85%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">React JS</span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className="tooltip">90%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">Firebase</span>
        <div className="skill-bar">
          <span className="skill-per javascript">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">NodeJS</span>
        <div className="skill-bar">
          <span className="skill-per nodejs">
            <span className="tooltip">40%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">Node JS</span>
        <div className="skill-bar">
          <span className="skill-per reactjs">
            <span className="tooltip">20%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">Git</span>
        <div className="skill-bar">
          <span className="skill-per expressjs">
            <span className="tooltip">50%</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SkillsBar
