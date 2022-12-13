import React from 'react'
import Card from '../card/Card'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { motion } from 'framer-motion'

const Services = () => {

    const transition = {
        duration: 2, type: 'spring'
      }
    return (
        <div className="Services" id='Services'>

            {/* left */}
            <div className='awesome'>
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry<br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </span>
                <button className='button s-button'>Download CV</button>
                <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right */}
            <div className='cards'>

                <motion.div initial={{ left: '68rem' }}
          whileInView={{ left: '63%' }}
          transition={transition} 
          style={{ left: '50rem', top: '41rem' }}>

                    <Card style={{ top: '10rem', left: '13rem' }}
                        emoji={HeartEmoji}
                        heading={"Design"}
                        detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
                    />
                </motion.div></div>

            {/* second card */}
            <motion.div initial={{ left: '18rem' }}
          whileInView={{ left: '36%' }}
          transition={transition}  
div className='cards2'>
                <div >


                    <Card

                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, Css, JavaScript, React, Nodejs, Express"}
                    />
                </div>
            </motion.div>

            {/* 3rd card */}
            <motion.div  initial={{ left: '65rem' }}
          whileInView={{ left: '56%' }}
          transition={transition} className='cards3'>

            <div >

                <Card
                    emoji={Humble}
                    heading={"UI/UX"}
                    detail={
                        "Lorem ispum dummy text are usually use in section where we need some random text"
                    }
                    color="rgba(252, 166, 31, 0.45)"
                    />
                    </div>
            </motion.div>


        </div>





    )
}

export default Services





