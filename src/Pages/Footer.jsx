import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import './footer.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer() {
    return (
        <div style={{marginBottom:"100px"}}> 
            <div className="container"style={{marginBottom:"100px"}}>
                <div className="row mt-5 d-flex align-items-center">
                        <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
                            <div className="image">
                                <img src="public/logo-main.png"style={{width:"180px"}} alt="" />
                            </div>
                            <div className="contents">
                                <p>if you decide netflix isn't for you <br />no problem.nocommittment.cancel online anytime</p>
                               
                                <h3>
                                     netflix@email.com
                                </h3>
                                <h4>
                                 Help center:-   +91 123 4567890
                                </h4>
                            </div>
                        </div>
                        <div className="Company col-lg-2 col-md-3 col-sm-12 mt-3">
                          
                            <h2>Help Centre</h2>
                            <h2>Jobs</h2>
                            <h2>Cookie Preferences</h2>
                            <h2>Legal Notices</h2>
                           
                        </div>
                        <div className="Company col-lg-2 col-md-3 col-sm-12 mt-3">
                          
                            <h2>account</h2>
                            <h2>Ways to Watch</h2>
                            <h2>Corporate Information</h2>
                            <h2>Only on Netflix</h2>
                           
                        </div>
                        <div className="Subscribe col-lg-4 col-sm-12 mt-3">
                            <h3>Subscribe Now</h3>
                          
                           

                        </div>

                </div>
            </div>
        </div>
    )
}

export default Footer