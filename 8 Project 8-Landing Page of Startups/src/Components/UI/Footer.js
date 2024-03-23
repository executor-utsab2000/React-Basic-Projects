import React from "react";
import footerLogo from './Images/canva-brown-mascot-lion-free-logo-qJptouniZ0A-removebg-preview.png'
import footerStyles from './Footer.module.css' ; 

export default function Footer(){
    return(
        <>
        <div className="container">
            <div className="row">
               
               
                <div className="col-lg-5  px-3">
                    <img src={footerLogo} alt=""  className={footerStyles.footerLogo}/> <br />
                    <span className={footerStyles.about}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis sunt, voluptatibus ad velit aspernatur architecto 
                    </span>
                </div>

                <div className="col-lg-7 mx-auto px-4 my-5 my-lg-0">
                    <div className="row">
                        <div className="col-md-4 my-3 my-md-0">
                            <span className={footerStyles.footerSmallHeaders}>Products</span>
                            <ul>
                                <li>Web Studio</li>
                                <li>DynamicBox Flex</li>
                                <li>Programming Forms</li>
                            </ul>
                        </div>

                        <div className="col-md-4 my-3 my-md-0">
                            <span className={footerStyles.footerSmallHeaders}>Resources</span>
                            <ul>
                                <li>Nostrud exercitation</li>
                                <li>Visual mockups</li>
                                <li>Nostrud exercitation</li>
                                <li>Visual mockups</li>
                                <li>Nostrud exercitation</li>
                            </ul>
                        </div>

                        <div className="col-md-4 my-3 my-md-0">
                            <span className={footerStyles.footerSmallHeaders}>Company</span>
                            <ul>
                            <li>Consectetur adipiscing</li>
                            <li>Labore et dolore</li>
                            <li>Consectetur adipiscing</li>
                            <li>Labore et dolore</li>
                            <li>Consectetur adipiscing</li>
                            <li>Labore et dolore</li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row mt-5 mb-5   ">
                <div className="col-lg-6 text-center text-lg-start text-info">
                    <span className={footerStyles.copyright}>
                    <i class="fa-regular fa-copyright me-3" style={{fontSize:"1rem"}}></i>
                    The Information provided in this page are subjected to CopyRight  
                    </span>
                </div>

                <div className="col-lg-6 d-flex justify-content-lg-end text-info justify-content-center my-4 my-lg-0">
                    <div className={footerStyles.socials}>
                    <i class="fa-brands fa-twitter me-3"></i>
                    <i class="fa-brands fa-github "></i>
                    <i class="fa-brands fa-facebook mx-3"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin ms-3"></i>
                    </div>
                </div>
            </div>

        </div>

        
        <div className="row m-0">
            <div className={`col-12 py-5 text-center ${footerStyles.maintainTxt}`}>
                    This Page is Created & Maintained by <span className="text-danger ms-2" style={{fontSize:"1.3rem"}}>𝐄𝗑𝖾𝖼υ𝗍ⱺ𝗋 </span>
            </div>
        </div>

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>
    )
}