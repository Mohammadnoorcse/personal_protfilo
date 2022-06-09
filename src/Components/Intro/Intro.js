import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
 import Instagram from '../../img/instagram.png'
 import Vector1 from '../../img/Vector1.png'
 import Vector2 from '../../img/Vector2.png'
 import Boy from '../../img/boy.png'
 import thumbup from '../../img/thumbup.png'
 import Crown from '../../img/crown.png'
 import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../../FloatingDiv/FloatingDiv'
import { motion } from 'framer-motion'
 
export default function Intro() {
     const transition = {duration:2,type:'spring'}
   return (
     <div className="intro">
       <div className="i-left">
         <div className="i-name">
           <span>Hy ! I Am</span>
           <span>Aminur Islam</span>
           <span>
             Frontend Developer with high level of experience in web designing
             and development, producting the quality work
           </span>
         </div>
         <button className="button i-button">Hire me</button>
         <div className="i-icons">
           <img src={Github} alt="" />
           <img src={LinkedIn} alt="" />
           <img src={Instagram} alt="" />
         </div>
       </div>
       <div className="i-right">
         <img src={Vector1} alt="" />
         <img src={Vector2} alt="" />
         <img src={Boy} alt="" />
         <motion.img
           initial={{ left: "-36%" }}
           whileInView={{ left: "-24%" }}
           transition={transition}
           src={glassesimoji}
           alt=""
         />

         <motion.div
           initial={{ left: "74%", top: "-4%" }}
           whileInView={{ left: "68%" }}
           transition={transition}
           style={{ top: "-4%", left: "68%" }}
         >
           <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
         </motion.div>
         <motion.div
           initial={{ left: "9rem",top:'18rem'}}
           whileInView={{ left: "0rem" }}
           transition={transition}
           style={{ top: "18rem", left: "0rem" }}
         >
           <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
         </motion.div>

         <div
           className="blur"
           style={{ background: "rgb {238,210,255}" }}
         ></div>
         <div
           className="blur"
           style={{
             background: "#c1f5ff",
             top: "17rem",
             width: "21rem",
             height: "11rem",
             left: "-9rem",
           }}
         ></div>
       </div>
     </div>
   );
 }
 