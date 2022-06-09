import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import Hoc from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import 'swiper/css'
    

export default function Portfolio() {
  return (
    <div className='portfolio'>
          {/* Headinh */}
          <span>Reac Projects</span>
          <span>Portfolio</span>
          {/* slider */}

          <Swiper
              spaceBetween={30}
              slidesPerView={3}
              grabCursor={true}
              className= 'portfolio-slider'
          
          >
              <SwiperSlide>
                  <img src={sidebar}alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={Ecommerce}alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={MusicApp}alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={Hoc}alt="" />
              </SwiperSlide>
          </Swiper>
    </div>
  )
}
