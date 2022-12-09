
import React from "react";
// import { FaFacebook } from "react-icons/fa";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaEnvelope, FaPhoneSquareAlt } from 'react-icons/fa'
import Logo from '../imaga/logo.png';
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <>

            {/* <!-- ======= Header ======= --> */}
            <section id="topbar" className="topbar d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="d-flex align-items-center ms-4">

                            <FaEnvelope />
                            <a href="mailto:contact@example.com">
                                <span> contact@example.com</span>
                            </a>
                        </i>
                        <i className="d-flex align-items-center ms-4">
                            <FaPhoneSquareAlt />
                            <a href="">
                                <span>+1 5589 55488 55</span>
                            </a>
                        </i>
                    </div>
                    <div className="social-links d-none d-md-flex align-items-center">
                        <a  className="twitter"><FaTwitterSquare /></a>
                        <a  className="facebook"><FaFacebookSquare /></a>
                        <a  className="instagram"><FaInstagramSquare /></a>
                        <a  className="linkedin" ><FaLinkedin /></a>
                    </div>
                </div>

            </section>
            {/* //   <!-- End Top Bar --> */}
            <section>
                <nav 
                 className="navbar navbar-expand-sm navbar-light fixed-top navbar-default "
                 id="neubar">
                    <div className="container">
                        <Link to='/'>
                        <a className="navbar-brand" >
                            <img src={Logo} height="60" />
                        </a>
                        </Link>
                        <button 
                        className="navbar-toggler" 
                        type="button"
                         data-bs-toggle="collapse" 
                         data-bs-target="#navbarNavDropdown" 
                         aria-controls="navbarNavDropdown" 
                         aria-expanded="false" 
                         aria-label="Toggle navigation"
                         >
                         <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto ">
                                <li className="nav-item">
                                <Link className="nav-link px-3 mx-2" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link px-3 mx-2" to="/Project">Project</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link px-3 mx-2" to="/About">About</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link px-3 mx-2" to="/Contact">Contact</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link mx-2 dropdown-toggle" 
                                    id="navbarDropdownMenuLink"
                                     role="button" 
                                     data-bs-toggle="dropdown" 
                                    aria-expanded="false" 
                                    // data-toggle="dropdown" 
                                    data-bs-hover="dropdown">
                                        Company
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" >File Rate</a></li>
                                        <li><a className="dropdown-item" >Map</a></li>
                                        <li>
                                        <Link className="dropdown-item" to="/Buy">Buy</Link>
                                            </li>
                                            <li>
                                        <Link className="dropdown-item" to="/Buy">Sale</Link>
                                            </li>
                                        <li>
                                        <Link className="dropdown-item" to="/Testimonial">Testimonial</Link>
                                            </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

        </>
    );
}

export default Nav;