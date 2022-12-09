import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Cities from './Cities';


function City() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className='head-text-sec'>
                        <ScrollAnimation
                            animateIn="fadeInDown"
                            animateOut="fadeOut"
                            duration={0.8}
                            animateOnce = {true}

                        >
                                <div className='h1 text-center color-golden'>
                                    City
                                </div>
                        </ScrollAnimation>
                            </div>
                    </div>
                    {/* cities Data comes from Component below  */}
                    <Cities/>
                    {/* End here   */}
                    <div className='text-center'>
                        <button className='bn1'>Click for More</button>
                    </div>
                    
                </div>
            </div>


        </>
    )
}

export default City