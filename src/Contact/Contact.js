import React from 'react'
import ContactD from '../header/contactD'
import { SlPhone, SlLocationPin, SlEnvolope } from "react-icons/sl";
import HeaderM from '../HeaBar/HeaderM';
import ScrollAnimation from 'react-animate-on-scroll';
import { Animated } from 'react-animated-css'

function Contact() {
    return (
        <>
            <HeaderM heading={"Contact"} passage={"Minhal Properties cover all aspects of real estate"} />

            <section>
                <div className="content">
                    {/* <ScrollAnimation
                            animateIn="fadeInDown"
                            animateOut="fadeOut"
                            duration={0.8}

                        > */}

                        <div className="container">
                            <div className="row ">
                                <div className="col-md-12">
                                    <div className="form h-100 color-golden">
                    <Animated
                        animationIn="fadeInDown"
                        animationOut="zoomOut"
                        animationInDuration={3000}
                        animationOutDuration={3000}
                        isVisible={true}
                    >
                                        <h3>Get In Touch</h3>
                                        </Animated>
                                        <form className="mb-1" method="post" id="contactForm" name="contactForm">
                                            <div className="row">
                                                <div className="col-md-6 form-group mb-1">
                                                    <label for="" className="col-form-label text-bold">Name *</label>
                                                    <input type="text" className="form-control" name="name" id="name" placeholder="Your name" />
                                                </div>
                                                <div className="col-md-6 form-group mb-1">
                                                    <label for="" className="col-form-label">Email *</label>
                                                    <input type="text" className="form-control" name="email" id="email" placeholder="Your email" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 form-group mb-1">
                                                    <label for="" className="col-form-label">Phone</label>
                                                    <input type="text" className="form-control" name="phone" id="phone" placeholder="Phone #" />
                                                </div>
                                                <div className="col-md-6 form-group mb-1">
                                                    <label for="" className="col-form-label">Company</label>
                                                    <input type="text" className="form-control" name="company" id="company" placeholder="Company  name" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 form-group mb-1">
                                                    <label for="message" className="col-form-label" span>Message *</label>
                                                    <textarea className="form-control"
                                                        name="message"
                                                        id="message"
                                                        cols="30"
                                                        rows="6"
                                                        placeholder="Write your message"></textarea>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                   
                    {/* </ScrollAnimation> */}
                </div>
            </section>
            <section>
                <div className="container">

                    <ScrollAnimation
                        animateIn="flipInY"
                        animateOut="backOutLeft"
                        duration={0.8}
                        animateOnce = {true}

                    >
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className='text-center color-golden mt-5 mb-3'>
                                    Find US
                                </h2>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-4 col-sm-4 col-sm-12">
                            <div className="single-servicesC">

                                <div className="single-servicesC-img">
                                    <i>
                                        <SlPhone />
                                    </i>

                                </div>
                                <div className="single-servicesC-desc">
                                    <h4><a href="#">Call Us</a></h4>
                                    <p>+124567892163</p>
                                </div>
                                {/* <a href="#" className="btn btn-light btn-radius grd1 btn-brd"> Read More </a> */}

                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-sm-12">
                            <div className="single-servicesC">
                                <div className="single-servicesC-img">
                                    <i>
                                        <SlLocationPin />
                                    </i>
                                </div>
                                <div className="single-servicesC-desc">
                                    <h4><a href="#">Address:</a></h4>
                                    <p>Plaza# 285 DHA Phase 6 Lahore</p>
                                </div>
                                {/* <a href="#" className="btn btn-light btn-radius grd1 btn-brd"> Read More </a> */}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-sm-12">
                            <div className="single-servicesC">
                                <div className="single-servicesC-img">
                                    <i>

                                        <SlEnvolope />
                                    </i>
                                </div>
                                <div className="single-servicesC-desc">
                                    <h4><a href="#">E-Mail</a></h4>
                                    <p>MinahilProperties@gmail.com</p>
                                </div>
                                {/* <a href="#" className="btn btn-light btn-radius grd1 btn-brd"> Read More </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact