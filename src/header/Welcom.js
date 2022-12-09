import { React } from "react"
import Abg from '../imaga/about_bg.jpg'
// import { Animated } from 'react-animated-css'
import { ScrollAnimation } from 'react-animate-on-scroll';
// import {AnimatedOnScroll} from "react-animated-css-onscroll";
import IconBox from "./IconBox";


function Welcome() {
    return (
        <>

            <IconBox/>
            <section className="m-5">

                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="post-media" >
                        
                                <img src={Abg} alt="" className="img-responsive" />
                           
                            </div>
                            
                            {/* <!-- end media --> */}
                        </div>
                        <div className="col-md-6">
                            <div className="message-box right-ab">
                                <h4>Awards Winning Real Estate Company</h4>
                           
                                    <h2 className="color-golden">Welcome to Minahil Properties</h2>
                                
                                <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
                                <p>Aenean eleifend in felis id viverra. Vestibulum semper ex eu molestie pulvinar. Maecenas non efficitur metus, et semper sem. Mauris ligula sapien, gravida a scelerisque ut, vehicula sed mauris. Proin dapibus mi id vulputate euismod. Nam ullamcorper dui tellus, non lacinia lorem hendrerit eu. Donec at orci cursus, rutrum metus eget, cursus turpis.  </p>
                                <div className=''>
                                    <button className='bn1'>Read More</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Welcome;