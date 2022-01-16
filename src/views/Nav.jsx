import React from 'react'
import { Link } from 'react-router-dom'


export const Nav = () => {
    return (
        <div>
            <header>
                <img  className='logo' src="../logo.png" alt="logo" />
                <ul className='nav-links'>
                    <Link to="/">
                        <li className='header-links'>Home</li>
                    </Link>

                    <Link to="/portfolio">
                    <li className='header-links'>Portfolio</li>
                    </Link> 
                    
                    <Link to="/about">
                    <li className='header-links'>About</li>
                    </Link>
                    
                </ul>
        </header>

        </div>
    )
}
