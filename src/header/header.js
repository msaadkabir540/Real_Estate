import React from 'react';
import { Animated } from 'react-animated-css'
import ScrollAnimation from 'react-animate-on-scroll';
import City from './City';
import home from '../imaga/buyhome.jpg'
import home1 from '../imaga/buyhome1.jpg'
import home2 from '../imaga/home.jpg'
import Project from './project';
import StoryHome from '../SectionFourth/StoryHome';
import Welcome from './Welcom';
import Looking from './LookingFor';
import CounterHome from '../Counter/CounterHome';
import CarouselFade from '../HeaBar/CarouselFade';

function Header() {

    const data = [
        {
            id: 1,
            image: home,
            header: 'BUY'

        }, {
            id: 2,
            image: home1,
            header: 'SALE'

        },
        {
            id: 3,
            image: home2,
            header: 'RENT'

        },
    ]



    return (
        <>




            {/* Header Components here  */}
            <CarouselFade />
            {/* Header Components end here  */}


            {/* welocme Components call here  */}

            <Welcome />

            {/* welcome components ends here  */}


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
                                <Looking />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <City />
            <Project />
            {/* <CounterHome/> */}
            <StoryHome />

        </>
    );
}

export default Header;
