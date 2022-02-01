import React from 'react'
import phone from '../assets/alcodePhone.png'

export const Portfolio = () => {
    return (
        <>
            <span className="port-container">
            <figure >
            <img src={phone} className='alcode-phone' alt='phone with hero'></img>
            <figcaption><a href='https://alcode-campgrounds.netlify.app/'>View the deployed site here</a></figcaption>
            </figure>
            </span>
        </>
    )
}
