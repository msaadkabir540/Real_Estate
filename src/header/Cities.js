import './style.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import bah from '../imaga/balwarpur.jpg'
import qta from '../imaga/Qutta.jpg'
import lhr from '../imaga/lahoreM.jpg'
import psh from '../imaga/pashwar.jpg'
import islamabad from '../imaga/islamabad.jpg'
import {Link} from 'react-router-dom'

function Cities() {


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
            <AliceCarousel
                mouseTracking
                // items={items}
                infinite={true}
                responsive={responsive}
                controlsStrategy="alternate"
            >
                {
                    dataC && dataC.map((data) => (

                        <div className="item cities-sec" data-value="1" key={data.id}>
                            < Link
                                // to = "/Project"
                                to={data.id === 3 ? "/DHA/Lahore" : "/Project"}
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
    )
}


export default Cities;