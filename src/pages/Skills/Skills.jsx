import React from "react"
import { Card } from "./Card"
import "./Skills.css"
import { RiCodeSSlashLine } from "react-icons/ri"
import { GiBrain } from "react-icons/gi"
import { MdLaptopMac } from "react-icons/md"

export const Skills = () => {
  return (
    <div id="Skills">
      <div class="title" data-aos="zoom-out-up" data-aos-duration="1000">
        <h1>
          Skill
          <span
            style={{
              color: "#2196f3",
              textShadow:
                "0px 0px 10px rgba(33, 150, 243, 0.25), 0px 0px 70px rgba(33, 150, 243, 0.3), 0px 0px 40px rgba(33, 150, 243, 0.25)",
            }}
          >
            s.
          </span>
        </h1>
      </div>
      <div className="details">
        <Card
          data-aos="fade-up"
          data-aos-duration="500"
          img={RiCodeSSlashLine}
          title="Full Stack Web Developer"
        />
        <Card img={GiBrain} title="Problem Solving" />
        <Card img={MdLaptopMac} title="UI/UX" />
      </div>
      
    </div>
  )
}
