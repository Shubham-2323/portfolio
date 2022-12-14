import React from 'react'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Toggle = () => {
    const theme =useContext(themeContext)
    const darkMode =theme.state.darkMode;

    const handleClick=()=>{
        theme.dispatch({type:'Toggle'})
    }
    return (
        <div className='Toggle'  onClick={handleClick}>
            <Moon />
            <Sun />
            
            <div className='t-button' style={darkMode? {left:'2px'}:{right:'3px'}}>




            </div>
        </div>
    )
}

export default Toggle