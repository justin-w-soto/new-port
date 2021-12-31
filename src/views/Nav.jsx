import React from 'react'
import { Link } from 'react-router-dom'


export const Nav = () => {
    return (
        <div>
            <header>
                <h3>JW SOTO</h3>
              
        </header>

        <footer>
        <ul>
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
        </footer>
        </div>
    )
}
