import React from "react";
import './Project.css';
// import Header from "../header/hearder";
import { Link } from 'react-router-dom';

import DHA_LHR from './DHA_LHR';
import HeaderM from "../HeaBar/HeaderM";



function DHA_C() {

    const header = "Project Details";


    return (
        <>

        <HeaderM heading={header} />
        <section>
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div>
                        <h1 className="color-golden">Lahore</h1>

                    </div>
                    <div>
                        <div className="p pb-5 mb-5">A Military Project (Pakistan Army) was founded in 1975. The DHA Lahore is a leading world-class housing society in Lahore provides a safe and high standard of living along with a green and healthy environment. DHA has attracted Pakistan top elite class to live and rejoice. They provide high standard residential and commercial facilities and that’s why it holds a special status for top class. It has become an ideal project for buyers and investors. Fully modernized and civilized community. Almost all housing societies in Lahore are following the trend set by the Defense Housing Authority decades ago.</div>
                    </div>
                </div>
            </div>
        </div>
        </section>
            
            <div className="container">
                <div className="row " >
                    {
                        DHA_LHR && DHA_LHR.map((cardData) => (

                            <div className="col-xl-3 col-lg-3 col-md-6 col-12" key={cardData.id} >
                                <div className='LhrImg' >
                                    <div className="bg-image hover-zoom">
                                        <Link to={"/Detail/"+ cardData.id}>
                                        {/* <Link to ={cardData.id == 5 ?"/DHA/Lahore" : "/Project"} style={{ textDecoration: 'none' }}> */}
                                            <img src={cardData.img} alt={'Lahore'} className='Lhr-img' />
                                        </Link>
                                    </div>
                                    {/* <div className='Lhr-head'><h1> {cardData.heading}</h1></div> */}

                                </div>
                            </div>
                        ))}
                </div>
            </div>


        </>
    )
}
export default DHA_C;