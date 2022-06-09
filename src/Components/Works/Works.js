import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { motion } from "framer-motion";


export default function Works() {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands and Clients</span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
          cupiditate neque.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing.
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
          rerum.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </span>

        <button className="button s-button">Haire me</button>

        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right side */}
      <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="w-right"
      >
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </motion.div>
    </div>
  );
}
