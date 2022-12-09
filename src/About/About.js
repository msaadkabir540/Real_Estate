import React from 'react'
import Looking from '../header/LookingFor'
import ScrollAnimation from 'react-animate-on-scroll';
import Team from './Team';
import HeaderM from '../HeaBar/HeaderM';
import { Animated } from 'react-animated-css'

function About() {

    const AboutOne =
        [
            {
                id: 1,
                heading: 'WHO WE ARE',
                passage: "Minhial Properties is a leading real estate network connecting a large number of property buyers and sellers around the globe. We provide proficient and solid consultancy to our domestic and overseas customers. Our aim is to provide multiple services for immovable assets including Houses, Plots, Agricultural Land, Shops and Shopping Plazas and various other property types. Whether you live in or outside Pakistan you’ll find our experienced and qualified staff fully equipped to provide you with investment opportunities of your liking."
            },
            {
                id: 2,
                heading: '  WHAT WE DO',
                passage: "We at Minhial Properties provide consultancy with regards to best investment opportunities. We thoroughly investigate profitable investment opportunities for our esteemed clients and keep them updated with the existing and upcoming projects specifically in Lahore. Be it short term investment opportunities, or if you’re looking to be in for the long haul. Red Real Estate is your one-stop shop for all your real estate needs."
            }
        ]

    return (
        <>
            <HeaderM heading={"About"} passage={"Minhal Properties cover all aspects of real estate"} />


            <section>
                <div className="container">
                    <div className="row" >

                        {
                            AboutOne.map((items) => (
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 m-3 " key={items.id} >
                                    <Animated
                                        duration={0.8}
                                        animationIn="fadeInDown"
                                        animationOut="zoomOut"
                                        animationInDuration={3000}
                                        animationOutDuration={3000}
                                        isVisible={true}
                                        animateOnce={true}

                                    >

                                        <div className="h2 text-center color-golden" >
                                            {items.heading}
                                        </div>
                                    </Animated>
                                    <Animated
                                        duration={0.8}
                                        animationIn="fadeIn"
                                        animationOut="zoomOut"
                                        animationInDuration={3000}
                                        animationOutDuration={3000}
                                        isVisible={true}
                                        animateOnce={true}

                                    >  
                                    <div className="p">
                                        {items.passage}
                                    </div>
                                     </Animated>
                                </div>
                            )
                            )
                        }
                      
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='head-text-sec'>
                                <ScrollAnimation
                                    animateIn="fadeInDown"
                                    animateOut="fadeOut"
                                    duration={0.8}
                                    animateOnce={true}
                                >
                                    <div className='h3 text-center color-golden'>
                                    What Are You Looking For
                                    </div>
                                </ScrollAnimation>

                            </div>
                        </div>

                    </div>
                    <div className="row">
                        {/* Looking for new section  */}
                        <Looking />
                        {/* looking for new section ends  */}

                    </div>
                </div>
            </section>

            {/* Our Team Here  */}
            <Team />
            {/* Our Team Here  */}
        </>
    )
}

export default About