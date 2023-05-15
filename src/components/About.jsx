import React from 'react'
import './About.css'
import myimage from './../images/ashu.png';


export const About = () => {
    return (
        <div className='main-div'>
            <div className='left-div'>
                <h3 className='heading1'>NAME : ASHOK YADAV</h3>
                <p className='p-bio'>GMAIL :<br /> ASHOK.YADAV3396@GMAIL.COM</p>
                <p className='p-bio'>PROFESSIONAL : WEBSITE DEVELOPER</p>
            </div>
            <div className='center-div'>
                <div className='about-containt'>
                    <div className='img-div'><img className='pic' src={myimage} alt="BigCo Inc. logo" /></div>
                    <div className='p-div'>
                        <h1 className='heading2'>About Me..</h1>
                        <p className='page'>Hi There ! My Name is Ashok and I'm a web Developer.I love creating beautiful experiences that work for both bussinesses and users.I enjoy working through Data and Numbers to create impactful Web Site.</p>
                        <div className='icon-div'>
                            <ul>
                                <li>
                                    <a href="https://twitter.com/Ashokya42570181?t=uQ4fzPEFC-0-ygTyFmFoAA&s=08 " target='blank'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span class="fa fa-twitter"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/ashokyadav3396/" target='blank'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span class="fa fa-instagram"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span class="fa fa-linkedin"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-div'>
                {/* <Link to="#">View Resume</Link>
               <Link to="#">Dawnload Resume</Link> */}
            </div>
        </div>
    )
}
export default About