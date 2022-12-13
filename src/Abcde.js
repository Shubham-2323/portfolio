import React from 'react'
import{Swiper,Swiperslide}from'useSwiper/react'
// import 'swiper/css'
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";



const Abcde = () => {
  return (
    <div className='portfolio'>

<span>Recent Projects</span>    
<span>portfolio</span>



 {/* slider */}
 <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <Swiperslide>
          <img src={Sidebar} alt="" />
        </Swiperslide>
        <Swiperslide>
          <img src={Ecommerce} alt="" />
        </Swiperslide>
        <Swiperslide>
          <img src={MusicApp} alt="" />
        </Swiperslide>
        <Swiperslide>
          <img src={HOC} alt="" />
        </Swiperslide>
      </Swiper>
    </div>
  )
}

export default Abcde