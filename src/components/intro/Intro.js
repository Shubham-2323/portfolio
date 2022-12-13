import React from 'react'
import Facebook from '../../img/facebook.png';
import Instagram from '../../img/insta.png';
import Linkedin from '../../img/linkedin.png';
import Vector from '../../img/Vector1.png';
import Me from '../../img/shubham.png';
import Vector2 from '../../img/Vector2.png';
import Glasses from '../../img/glassesimoji.png';
import Crown from '../../img/crown.png';
import Floating from '../FloatingDiv/Floating';
import emoji from '../../img/heartemoji.png';
import { motion } from 'framer-motion'



const Intro = () => {

  const transition = {
    duration: 2, type: 'spring'
  }
  return (

    <div className="Intro1">


      <div className="i-left">
        <div className="i-name">


          <span>Hi! I Am </span>
          <span> Shubham </span>

          <span> I am a senior front-end web engineer from India. I work in the FinTech industry and love what I do. In this article, I want to explain a bit about my role. </span>
        </div>

        <button className=" button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={Linkedin} alt="" />



        </div>
      </div>
      <div className="i-right">
        <img src={Vector} alt="" />
        <img src={Vector2} alt="" />
        <img src={Me} alt="" />
        <motion.img initial={{ left: '-40%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}

          src={Glasses} alt="" />

        <motion.div
          initial={{ left: '56%', top: '-4%' }}
          whileInView={{ left: '73%' }}
          transition={transition}
          style={{ top: '-13%', left: '76%' }}>
          <Floating image={Crown} txt1='Web' txt2='Developer' />
        </motion.div>
        {/* blur effect */}
        <div className="blur" style={{ background: "rgb(238  210 255)" }}></div>
        <div className="blur"
          style={{
            background: '#C1f5ff',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-6rem'
          }}
        ></div>


      </div>
    </div>


  )
}

export default Intro;