import React from 'react'
import CarouselFade from './CarouselFade'
import { Animated } from 'react-animated-css'
import Loader from '../Loader/Loader'

function HeaderM(props) {
  return (
    <>
      <header className="py-5  mb-4 bg-about ">
        <div className="container">
          <div className="text-center my-5 glassEffect-bg">
            <Animated
              animationIn="fadeInDown"
              animationOut="zoomOut"
              animationInDuration={3500}
              animationOutDuration={3500}
              isVisible={true}
            >

              <h1 className="fw-bolder "
              // color-golden"
              >{props.heading}</h1>
            </Animated>
            <Animated
              animationIn="fadeInDown"
              animationOut="zoomOut"
              animationInDuration={3000}
              animationOutDuration={3000}
              isVisible={true}
            >
              <p className="lead mb-0">{props.passage}</p>
            </Animated>
          </div>
        </div>
      </header>
      {/* <CarouselFade/> */}
      <Loader/>
    </>
  )
}

export default HeaderM