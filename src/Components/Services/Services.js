import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glesses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from '../../resume.pdf'
import { motion } from "framer-motion";

export default function Services() {
    const transition = { duration: 2, type: "spring" };

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
          cupiditate neque.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download Cv</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "14rem" }}
          whileInView={{ left: "25rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma,Sketch,Photoshop,Adobe,Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glesses}
            heading={"Developer"}
            detail={"Html,Css,JavaScript,React"}
          />
        </div>
        {/* third card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem ispum dummy text are usually use in section"}
          />
        </div>
      </div>
    </div>
  );
}
