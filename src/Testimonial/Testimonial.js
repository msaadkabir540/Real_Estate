import React from 'react'
import team1 from '../imaga/team-1.jpg'
import team2 from '../imaga/team-2.jpg'
import team3 from '../imaga/team-3.jpg'
import team4 from '../imaga/team-4.jpg'
import ScrollAnimation from 'react-animate-on-scroll';
import { Animated } from 'react-animated-css'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import HeaderM from '../HeaBar/HeaderM'
import CarouselFade from '../HeaBar/CarouselFade'

function Testimonial() {
    return (
        <>
            <HeaderM heading={"Testimonial"} passage='Lorem ipsum or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.' />
            {/* <CarouselFade/> */}
            <section className="team-section">
                <div className="container team-cards">
                    <div className="row">
                        <div className="section-title">
                        <Animated
                                        duration={0.8}
                                        animationIn="fadeInDown"
                                        animationOut="zoomOut"
                                        animationInDuration={3000}
                                        animationOutDuration={3000}
                                        isVisible={true}
                                        animateOnce={true}

                                    >
                            {/* <ScrollAnimation
                                animateIn="fadeInDown"
                                animateOut="fadeOut"
                                duration={0.6}
                                animateOnce={true}
                            > */}
                                <h1 className='color-golden'>Our Team</h1>
                            {/* </ScrollAnimation>
                            <ScrollAnimation
                                animateIn="fadeInDown"
                                animateOut="fadeOut"
                                duration={0.9}
                                animateOnce={true}
                            > */}

                                <p>Lorem ipsum or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                            {/* </ScrollAnimation> */}
                            </Animated>
                        </div>
                    </div>
                    <div className="row">


                        <div className="team-items">
                            <div className="item">
                                <img src={team1} alt="team" />
                                <div className="inner">
                                    <div className="info">
                                        <h5>Sarita Sharma</h5>
                                        <p>CEO</p>
                                        <div className="social-links">
                                            <a href="#" className="twitter"><FaTwitter /></a>
                                            <a href="#" className="facebook"><FaFacebook /></a>
                                            <a href="#" className="instagram"><FaInstagram /></a>
                                            <a href="#" className="linkedin"><FaLinkedin /></a>
                                            {/* <a href=""><span className="fa fa-facebook"></span></a>
                                   <a href=""><span className="fa fa-twitter"></span></a>
                                   <a href=""><span className="fa fa-linkedin"></span></a>
                                   <a href=""><span className="fa fa-youtube"></span></a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <img src={team2} alt="team" />
                                <div className="inner">
                                    <div className="info">
                                        <h5>Sonu Gupta</h5>
                                        <p>Manager</p>
                                        <div className="social-links">
                                            <a href="#" className="twitter"><FaTwitter /></a>
                                            <a href="#" className="facebook"><FaFacebook /></a>
                                            <a href="#" className="instagram"><FaInstagram /></a>
                                            <a href="#" className="linkedin"><FaLinkedin /></a>
                                            {/* <a href=""><span className="fa fa-facebook"></span></a>
                                   <a href=""><span className="fa fa-twitter"></span></a>
                                   <a href=""><span className="fa fa-linkedin"></span></a>
                                   <a href=""><span className="fa fa-youtube"></span></a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <img src={team3} alt="team" />
                                <div className="inner">
                                    <div className="info">
                                        <h5>Chahar Singh</h5>
                                        <p>Marketing Manager</p>
                                        <div className="social-links">
                                            <a href="#" className="twitter"><FaTwitter /></a>
                                            <a href="#" className="facebook"><FaFacebook /></a>
                                            <a href="#" className="instagram"><FaInstagram /></a>
                                            <a href="#" className="linkedin"><FaLinkedin /></a>
                                            {/* <a href=""><span className="fa fa-facebook"></span></a>
                                   <a href=""><span className="fa fa-twitter"></span></a>
                                   <a href=""><span className="fa fa-linkedin"></span></a>
                                   <a href=""><span className="fa fa-youtube"></span></a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <img src={team4} alt="team" />
                                <div className="inner">
                                    <div className="info">
                                        <h5>Soshiv Upreti</h5>
                                        <p>Designer</p>
                                        <div className="social-links">
                                            <a href="#" className="twitter"><FaTwitter /></a>
                                            <a href="#" className="facebook"><FaFacebook /></a>
                                            <a href="#" className="instagram"><FaInstagram /></a>
                                            <a href="#" className="linkedin"><FaLinkedin /></a>
                                            {/* <a href=""><span className="fa fa-facebook"></span></a>
                                   <a href=""><span className="fa fa-twitter"></span></a>
                                   <a href=""><span className="fa fa-linkedin"></span></a>
                                   <a href=""><span className="fa fa-youtube"></span></a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <CarouselFade/> */}

        </>
    )
}

export default Testimonial