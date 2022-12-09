import React from "react";
import './buy.css';
import HeaderM from "../../HeaBar/HeaderM";
import house1 from '../../imaga/house1.jpg';
import house2 from '../../imaga/house2.jpg';
import house3 from '../../imaga/house3.jpg';
import house4 from '../../imaga/house4.jpg';
import house5 from '../../imaga/house5.jpg';
import house6 from '../../imaga/house6.jpg';
import house7 from '../../imaga/house7.jpg';
import house8 from '../../imaga/house8.jpg';
import house9 from '../../imaga/house9.jpg';
import house10 from '../../imaga/house10.jpg';
import house11 from '../../imaga/house11.jpg';


function Buy() {


    const buy = [
        {
            id: 1,
            img: house1,
            price: '$65,00,000',
            address: '19010 Ashurst Lane TARZANA, CA 91356'


        },
        {
            id: 2,
            img: house2,
            price: '$75,00,000',
            address: '19010 Ashurst Lane TARZANA, CA 91356'


        }
        , {
            id: 3,
            img: house3,
            price: '$55,00,000',
            address: '19010 Ashurst Lane TARZANA, CA 91356'


        },
        {
            id: 4,
            img: house4,
            price: '$45,00,000',
            address: '19010 Ashurst Lane TARZANA, CA 91356'


        },
        {
            id: 5,
            img: house5,
            price: '$60,00,000',
            address: '19010 Ashurst Lane TARZANA, CA 91356'


        }
        , {
            id: 6,
            img: house6,
            price: '$95,00,000',
            address: '19010 Ashurst Lane TARZANA, CA 91356'


        }
        , {
            id: 7,
            img: house7,
            price: '$95,00,000',
            address: '19010 Ashurst Lane TARZANA, CA 91356'


        },
        {
            id: 8,
            img: house8,
            price: '$65,00,000',
            address: '19010 Ashurst Lane TARZANA, CA 91356'


        },
        {
            id: 9,
            img: house9,
            price: '$105,00,000',
            address: '19010 Ashurst Lane TARZANA, CA 91356'


        }
        , {
            id: 10,
            img: house10,
            price: '$650,00,000',
            address: '19010 Ashurst Lane TARZANA, CA 91356'


        },
        {
            id: 11,
            img: house11,
            price: '$54,00,000',
            address: '19010 Ashurst Lane TARZANA, CA 91356'


        },

        {
            id: 12,
            img: house4,
            price: '$54,00,000',
            address: '19010 Ashurst Lane TARZANA, CA 91356'


        }
    ]



    return (
        <>
            <div class="body">


                <HeaderM heading={"BUY/SALE"} />

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className=" text-white-heading testimonials-heading-info ">
                                    <div className="testimonials-heading">
                                        Sold
                                        <br />
                                        <span className="testimonials-heading-br">Listing</span>

                                    </div>
                                </div>
                            </div>

                         
                                <div className="col-md-6 alignItemCenter">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-3">
                                            <div className="sold-paragraph">
                                                <p>
                                                    <span className="span-info">7 Thousand</span>
                                                    <br />
                                                    PROPERTIES SOLD
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4  col-sm-3">
                                            <div className="sold-paragraph">
                                                <p><span className="span-info">90 DAYS</span>
                                                    <br />
                                                    SELL YOUR HOME
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4  col-sm-3">
                                            <div className="sold-paragraph">
                                                <p><span className="span-info">20+ YEARS</span>
                                                    <br />
                                                    TOP LISTING AGENT
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                       
                        </div>
                    </div>
                </section>

                <section >
                    <div class="container">
                        <div class="row">
                            {
                                buy && buy.map((item) => (
                                    <div class=" col-lg-4 col-md-6 " key={item.id}>
                                        <div class="bg-opacity back" >
                                            <img src={item.img} alt="" class="back" />
                                            <div class="contents">
                                                <h1>{item.price}</h1>
                                                <p>{item.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonials-heading-info ">
                                <div className="testimonials-heading">
                                    CLIENT
                                    <br />
                                    <span className="">TESTIMONIALS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bg-buy-sale-client">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Buy;