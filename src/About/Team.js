import React from 'react'
import team1 from '../imaga/team-1.jpg'
import team2 from '../imaga/team-2.jpg'
import team3 from '../imaga/team-3.jpg'
import team4 from '../imaga/team-4.jpg'
import ScrollAnimation from 'react-animate-on-scroll';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Team() {
    return (
        <>

            <section className="team-section">
                <div className="container team-cards">
                    <div className="row">
                        <div className="section-title">
                            <ScrollAnimation
                                animateIn="fadeInDown"
                                animateOut="zoomOut"
                                animationInDuration={1500}
                                animationOutDuration={1500}
                                duration={0.8}
                                animateOnce={true}
                            >
                                <h1 className='color-golden'>Our Team</h1>
                            </ScrollAnimation>
                            <ScrollAnimation
                                animateIn="fadeInDown"
                                animateOut="zoomOut"
                                animationInDuration={3500}
                                animationOutDuration={3500}
                                duration={0.8}
                                animateOnce={true}
                            >
                                <p>Lorem ipsum or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="row">
                    <ScrollAnimation
                            animateIn="fadeInDown"
                            animateOut="zoomOut"
                            animationInDuration={8500}
                            animationOutDuration={8500}
                            duration={0.8}
                            animateOnce={true}
                        >
                            <div className="team-items">
                                <div className="item">
                                    <img src={team1} alt="team" />
                                    <div className="inner">
                                        <div className="info">
                                            <h5>Sarita Sharma</h5>
                                            <p>Designer</p>
                                            <div className="social-links">
                                                <a href="#" className="twitter"><FaTwitter /></a>
                                                <a href="#" className="facebook"><FaFacebook /></a>
                                                <a href="#" className="instagram"><FaInstagram /></a>
                                                <a href="#" className="linkedin"><FaLinkedin /></a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={team2} alt="team" />
                                    <div className="inner">
                                        <div className="info">
                                            <h5>Sonu Gupta</h5>
                                            <p>Designer</p>
                                            <div className="social-links">
                                                <a href="#" className="twitter"><FaTwitter /></a>
                                                <a href="#" className="facebook"><FaFacebook /></a>
                                                <a href="#" className="instagram"><FaInstagram /></a>
                                                <a href="#" className="linkedin"><FaLinkedin /></a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={team3} alt="team" />
                                    <div className="inner">
                                        <div className="info">
                                            <h5>Chahar Singh</h5>
                                            <p>Designer</p>
                                            <div className="social-links">
                                                <a href="#" className="twitter"><FaTwitter /></a>
                                                <a href="#" className="facebook"><FaFacebook /></a>
                                                <a href="#" className="instagram"><FaInstagram /></a>
                                                <a href="#" className="linkedin"><FaLinkedin /></a>

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

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            </ScrollAnimation >
                    </div>
                       
                </div>
            </section>

        </>
    )
}

export default Team