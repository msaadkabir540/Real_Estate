import { BsBuilding, BsHouseFill } from "react-icons/bs";
import { GiCctvCamera } from "react-icons/gi";
import { FaStoreAlt } from "react-icons/fa";

import { Animated } from 'react-animated-css'


function IconBox() {

  const Box=[
    {
      id:1,
      title:"Full Furnished",
      icons: <BsHouseFill />

    },
    {
      id:2,
      title:"Luxurious Fittings",
      icons: <BsBuilding />

    },
    {
      id:3,
      title:"Non Stop Security",
      icons: <GiCctvCamera />

    },
    {
      id:4,
      title:"24/7 Departmental Stores",
      icons: <FaStoreAlt />
    }
  ]



  return (
    <>
      <Animated
        animationIn="fadeInDown"
        animationOut="zoomOut"
        // animationInDuration={2000}
        // animationOutDuration={2000}
        animateOnce = {true}
      >

        <div className="hero">

          <div className="icon-boxes">
            <div className="container ">
              <div className="row gy-4 mt-5">
                {
                  Box && Box.map((box)=>(
                    <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100" key={box.id}> 
                    <div className="icon-box">
                      <div className="icon">{box.icons}</div>
                      <h4 className="title"><a href="" className="stretched-link">{box.title}</a></h4>
                    </div>
                  </div>

                  ))
                }
                 {/* <!--End Icon Box --> */}

              </div>
            </div>
          </div>
        </div>
      </Animated>
    </>
  )
}

export default IconBox;