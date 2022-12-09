import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import home from '../imaga/home.jpg'
import lhr from '../imaga/lahoreM.jpg'
import psh from '../imaga/pashwar.jpg'
import islamabad from '../imaga/islamabad.jpg'
import bah from '../imaga/balwarpur.jpg'
import qta from '../imaga/Qutta.jpg'
import { Link } from 'react-router-dom'


function Project() {

 
    const dataC = [
        {
            id: 1,
            image: bah,
            text: "Balwarpur",
        },
        {
            id: 2,
            image: qta,
            text: "Qutta",
        },
        {
            id: 3,
            image: lhr,
            text: "Lahore"

        }
        , {
            id: 4,
            image: psh,
            text: "Pashwar"

        }, {
            id: 5,
            image: islamabad,
            text: "Islamabad"

        }
    ]

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
        margin: 30,
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className='head-text-sec'>
                            <ScrollAnimation
                                animateIn="fadeInDown"
                                animateOut="fadeOut"
                                duration={1}
                                animateOnce = {true}
                            >

                                <div className='h1 text-center color-golden'>
                                    Major Project
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div>
                            <div className=''>
                                <>
                                    <AliceCarousel
                                        // mouseTracking
                                        // items={items}
                                        infinite={true}
                                        responsive={responsive}
                                        controlsStrategy="alternate"
                                    >
                                        {
                                            dataC && dataC.map((data) => (

                                                <div className="item cities-sec"  key={data.id}>
                                                    < Link 
                                                    // to = "/Project"
                                                    to ={data.id === 3 ?"/DHA/Lahore" : "/Project"} 
                                                    style={{ textDecoration: 'none' }}
                                                    >

                                                    <img className='cities-sec-img' src={data.image} alt="" />
                                                    <div className="overlay">
                                                        <div className="img-text">
                                                            <div>
                                                                <h1>{data.text}</h1>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </AliceCarousel>
                                </>
                                <div className='text-center'>
                                    <button className='bn1'>Click for More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Project