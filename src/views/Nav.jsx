import React from 'react'
import { Link } from 'react-router-dom'


export const Nav = () => {
    return (
        <>
            <header>
                <img  className='logo' src="../logo.png" alt="logo" />
                <nav aria-label='primary-navigation'>
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
                </nav>
            </header>

        </>
    )
} 