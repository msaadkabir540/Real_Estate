import './counter.css'
import CountUp from 'react-countup';

import ScrollAnimation from 'react-animate-on-scroll';

function CounterHome() {



    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='head-text-sec'>
                                <ScrollAnimation
                                    animateIn="fadeInDown"
                                    animateOut="fadeOut"
                                    duration={0.8}
                                >
                                    <div className='h3 text-center color-golden '>
                                    OUR ACHIEVMENTS
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                    </div>

            </section>

            <div id="projectFacts" className="sectionClass">
                <div className="fullWidth eight columns">
                    <div className="projectFactsWrap ">
                        <div className="item wow fadeInUpBig animated animated" data-number="12" style={{ visibility: "visible;" }}>
                            <i className="fa fa-briefcase"></i>
                            <CountUp start={0} end={12000} delay={5}>
                                {({ countUpRef }) => (
                                    <div>

                                        <p id="number1" className="number" ref={countUpRef} />

                                    </div>
                                )}
                            </CountUp>
                            <span></span>
                            <p>Projects done</p>
                        </div>
                        <div className="item wow fadeInUpBig animated animated" data-number="55" style={{ visibility: "visible;" }}>
                            <i className="fa fa-smile-o"></i>
                            <CountUp start={0} end={55000} delay={5}>
                                {({ countUpRef }) => (
                                    <div>

                                        <p id="number2" className="number" ref={countUpRef} />

                                    </div>
                                )}
                            </CountUp>
                            {/* 55,000</p> */}
                            <span></span>
                            <p>Happy clients</p>
                        </div>
                        <div className="item wow fadeInUpBig animated animated" data-number="359" style={{ visibility: "visible;" }}>
                            <i className="fa fa-coffee"></i>
                            <CountUp start={0} end={3590} delay={5}>
                                {({ countUpRef }) => (
                                    <div>
                                        <p id="number3" className="number" ref={countUpRef} />

                                    </div>
                                )}
                            </CountUp>
                            <span></span>
                            <p>SEEMLESS TRANSACTIONS</p>
                        </div>
                        <div className="item wow fadeInUpBig animated animated" data-number="246" style={{ visibility: "visible;" }}>
                            <i className="fa fa-camera"></i>
                            <CountUp start={0} end={2490} delay={5}>
                                {({ countUpRef }) => (
                                    <div>
                                        {/* <p id="number3" className="number" */}
                                        <p id="number4" className="number" ref={countUpRef}></p>

                                    </div>
                                )}
                            </CountUp>
                            <span></span>
                            <p>DELIVERANCE</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CounterHome;