import React from 'react'
import Toggle from './toggle/Toggle';
import { Link } from 'react-scroll'
import Services from './services/Services';

function Navbar() {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">LOGO</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">

                    <ul style={{ listStyleType: 'none' }}>

                        <Link spy={true} to='Navbar' smooth={true} >

                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} >
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} >
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='portfolio' smooth={true} >
                            <li>Portfolio</li></Link>
                        <Link spy={true} to='Testimonials' smooth={true} >
                            <li>Testimonials</li></Link>
                    </ul>
                </div>
            

                <button className="button">
                    Contact us
                </button>
                
            </div>


        </div>
    )
}

export default Navbar;