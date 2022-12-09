import Carousel from 'react-bootstrap/Carousel';
import './header.css'
import { Animated } from 'react-animated-css'
import Header1 from '../imaga/sa-rapita-2483668_1920.jpg'
import Header2 from '../imaga/house-1477041.jpg'
import Header3 from '../imaga/architecture-3383067_1920.jpg'
import { Link } from 'react-router-dom';

function CarouselFade() {
  const carousel = [
    {
      id      : 1,
      img     : Header1,
      heading : "Minahil Properties",
      text    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id      : 2,
      img     : Header2,
      heading : "Minahil Properties",
      text    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id      : 3,
      img     : Header3,
      heading : "Minahil Properties",
      text    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]
  return (
    <Carousel fade>
      {
        carousel && carousel.map((item)=>(
          <Carousel.Item>
        <img
          className="d-block w-100 carousel-img "
          src={item.img}
          alt="Minahil Properties"
          />

        <Carousel.Caption  >
          <div className='glassEffect'>
          <Animated
            animationIn="fadeInDown"
            // animationOut="rotateInUpLeft"
            animationInDuration={2000}
            animationOutDuration={2000}
            isVisible={true}
            // once = {true}
            >
              <h1 className='fw-bolder '>{item.heading}</h1>
              <p>{item.text}</p>
          </Animated>
            </div>
            <div className='btn-heading'>
              <Link to="/About">
                        <button className='bn1'>More</button>
              </Link>
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
        
      ))
    }
      
    </Carousel>
  );
}

export default CarouselFade;