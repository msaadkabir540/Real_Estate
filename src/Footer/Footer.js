import { Link } from 'react-router-dom'
import logo from '../imaga/logo.png'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <>

            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="index.html" className="logo d-flex align-items-center">
                                {/* <span>Impact</span> */}
                                <img src={logo} alt="" />
                            </a>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                            {/* <div className="social-links d-flex mt-4">
                                <a href="#" className="twitter"><FaTwitter/></a>
                                <a href="#" className="facebook"><FaFacebook/></a>
                                <a href="#" className="instagram"><FaInstagram/></a>
                                <a href="#" className="linkedin"><FaLinkedin/></a>
                            </div> */}

                            <div>
                                <ul className="wrapper">
                                    <li className="icon facebook">
                                        <span className="tooltip">Facebook</span>
                                        <span><FaFacebook />
                                            {/* <i className="fab fa-facebook-f"></i> */}
                                        </span>
                                    </li>
                                    <li className="icon twitter">
                                        <span className="tooltip">Twitter</span>
                                        <span><FaTwitter />
                                            {/* <i className="fab fa-twitter"></i> */}
                                        </span>
                                    </li>
                                    <li className="icon instagram">
                                        <span className="tooltip">Instagram</span>
                                        <span><FaInstagram />
                                            {/* <i className="fab fa-instagram"></i> */}
                                        </span>
                                    </li>
                                    {/* <li className="icon github">
                                        <span className="tooltip">Github</span>
                                        <span><i className="fab fa-github"></i></span>
                                    </li> */}
                                    <li className="icon youtube">
                                        <span className="tooltip">Youtube</span>
                                        <span><FaLinkedin />
                                            {/* <i className="fab fa-youtube"></i> */}
                                        </span>
                                    </li>
                                </ul>
                            </div>



                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><Link to='/'>Home  </Link></li>
                                <li><Link to='/About'>About</Link></li>
                                <li><Link to='/Project'>Project</Link></li>
                                <li><Link to="/Testimonial">Testimonial</Link></li>
                                <li> <Link to="/Contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>City</h4>
                            <ul>
                            
                                <li><Link to='/DHA/Lahore'>Lahore</Link></li>
                                <li><Link to='/Project'>Karachi</Link></li>
                                <li><Link to='/Project'>Islamabad</Link></li>
                                <li><Link to='/Project'>Gujnawala</Link></li>
                                
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                Main Building # 285 <br />
                                DHA Phase 6<br />
                                Lahore Pakistan<br /><br />
                                <strong>Phone:</strong> +92-321-5548855<br />
                                <strong>Email:</strong> MiahilProperties@example.com<br />
                            </p>

                        </div>

                    </div>
                </div>

                <div className="container mt-4">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Minahil Properties</span></strong>. All Rights Reserved
                    </div>

                </div>
            </footer>
        </>
    );
}


export default Footer;