import React from 'react'
import mugshot from '../assets/mugshot.png'

export const About = () => {
    return (
        <>
            <div className="container">
                <div className='profile-pic'
                style={{ backgroundImage: `url(${ mugshot })` }}></div>
                <h1 className='about-heading'>Hi, I'm Justin!</h1>
                <p className='bio'>
                    I am a software engineer, photographer, and citizen scientist in Portland, Oregon.
                    A versatile solution seeker, I enjoy working with talented people to create things 
                    that can help us make sense of the world. When I'm not working, you can find me 
                    outside. Likely in the forest, investigating local plant communities with camera in hand. 
                    It's my belief that technology can be used to better understand our environment and 
                    create healthier communities. Let's work together; I'm always looking for new challenges to take on!
                </p>
            </div>
            <div className='work-links'>
                    <ul>
                        <li><a className="links"  href='https://github.com/justin-w-soto'>github</a></li>
                        <li><a className="links"  href='https://www.linkedin.com/in/justinwsoto/'>linkedin</a></li>
                        <li><a className="links"  href='mailto:justinwsoto@gmail.com'>email</a></li>
                        <li><a className="links"  href='https://drive.google.com/file/d/1Ir9kZVlqI6k8lxDOplsMQ5oa-j4xVEi1/view?usp=sharing'>resume</a></li>
                    </ul>
            </div>       
                
               
        </> 
    )
}
