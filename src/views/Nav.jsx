import React from 'react'
import { Link } from 'react-router-dom'


export const Nav = () => {
    return (
        <div>
            <header>
                <img className='logo' src="../JW Soto 8.png" alt="logo" />
                <ul className='nav-links'>
                    <Link to="/">
                        <li>Home</li>
                    </Link>

                    <Link to="/portfolio">
                    <li>Portfolio</li>
                    </Link> 
                    
                    <Link to="/about">
                    <li>About</li>
                    </Link>
                    
                </ul>
        </header>

        {/* <footer></footer> */}
        </div>
    )
}