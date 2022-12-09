import { React, useEffect, useState } from 'react';
// import axios from 'axios'
import './Detail.css';
import { useParams } from 'react-router-dom'
import HeaderM from '../../HeaBar/HeaderM';
import Img from '../../imaga/DHA-Lahore-Phase-1-2.jpeg'
import { Animated } from 'react-animated-css'
// import Table from './detailpagetable'
import { trackPromise } from "react-promise-tracker";


function DetailPageOC() {
    // const params = useParams();
    // const [detail, setDetail] = useState([]);
    // const details = detail.data;
    // console.log(details);

    // useEffect(() => {
    //     getApi();
    // }, [params.id]);

    // const getApi = async () => {
    //     await axios.get(`http://localhost:8000/api/phaseDetail/${params.id}`, {
    //         headers:
    //         {
    //             "Content-Type": 'application/json',
    //             "Accept": 'application/json'

    //         },
    //         body: JSON.stringify(),
    //     })
    //         .then((res) => {
    //             setDetail(res);
    //         })
    //         .catch((err) => console.log(err));
    // };

    // if (!detail) return " no post";

    const params = useParams();
    const [detail, setDetail] = useState("");
    console.log(detail)

    useEffect(() => {

        trackPromise(

            listData()
        )

    }, [params.id])


    const listData = async () => {
        // phaseDetail for office api
        // http://localhost:8000/api/Detail  for home api 
        const res = await fetch(`http://localhost:8000/api/phaseDetail/${params.id}`, {
            method: "GET",
            headers:
            {
                "Content-Type": 'application/json',
                "Accept": 'application/json'

            },
            body: JSON.stringify(),

        });

        const newData = await res.json();
        console.log(newData);
        setDetail(newData)
    }






    return (
        <>
            <HeaderM heading={detail.name} />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 img-center ">
                            <img src={'http://localhost:8000/' + detail.img} alt="project-image" className="rounded" />
                        </div>
                        <div className=" col-md-12">

                            <div className="project-info-box mt-0">

                                <h1 className='color-golden'>{detail.name}</h1>
                                <p className="mb-0" >{detail.detail}</p>
                            </div>
                            <div className="box1">
                                <h2 className='color-golden'> {detail.name} Blocks</h2>
                                <ul className='list-unstyled'>

                                    {
                                        detail.block_detail && detail.block_detail.map((items) => (
                                            <li className="m-2 p-2 ">
                                                {items.block_name}
                                                {/* {items.blockname} */}
                                            </li>

                                        ))
                                    }
                                </ul>
                            </div>
                        </div>



                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl 12 project-info-box">
                            {
                                detail.areatype_detail && detail.areatype_detail.map((heading) => (
                                    // detail.areatype_detail && detail.areatype_detail.map((heading) => (


                                    <div>
                                        <h3 className='color-golden'>{heading.type_name}</h3>
                                        <table class="table">

                                            <tbody className='m-5'>
                                                <th className='m-5'>Area</th>
                                                <th className='m-5'>Price</th>

                                                {
                                                    heading.area_details && heading.area_details.map((areaDetail) => (
                                                        <tr>
                                                            <td>{areaDetail.Area}</td>
                                                            <td>{areaDetail.price}</td>
                                                        </tr>

                                                    ))}
                                                    {/* {
                                                    heading.area_detail && heading.area_detail.map((areaDetail) => (
                                                        <tr>
                                                            <td>{areaDetail.area}</td>
                                                            <td>{areaDetail.price}</td>
                                                        </tr>

                                                    ))} */}
                                            </tbody>

                                        </table>
                                    </div>


                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default DetailPageOC;