import React from "react";
import belowNavSecStyles from './BelowNavSection.module.css';
import Thumbnail from './UI/Images/ThumbnailPic.webp' ;




export default function BelowNavSection(){
    return(

        <>
        
            <div className="container" style={{marginTop:"5rem"}}>

            <div className={`row text-center ${belowNavSecStyles.headerDimension}`}>
            <div className="col-12 px-5">
            <div className="container px-0 px-lg-5 ">
                 <div className="row  ">
                    <div className="col-12 px-2 px-lg-5">    
                        <span className={belowNavSecStyles.pdtSecionHeader}> Landing template for startups</span> <br /><br />
                        <span className={belowNavSecStyles.description}> Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</span> <br /><br />
                    </div>

                    <div className="col-12 d-flex justify-content-center">
                            <button className={` me-3  ${belowNavSecStyles.btn}  ${belowNavSecStyles.btnpurple} `}>Start Free Trial</button>
                            <button className={` ms-3  ${belowNavSecStyles.btn}  ${belowNavSecStyles.btngrey}   `}>Learn More</button>
                    </div>
                 </div>
            </div>
        </div>
    </div>

        <div className={`row ${belowNavSecStyles.videoSection}`}>
            <div className="col-12 d-flex justify-content-center">
            <video controls poster={Thumbnail}>
                <source src="Video/video.mp4" type="video/mp4" /> 
            </video>
            </div>
        </div>



            </div>
        
        
        
        
        
        
        
        
        
        
        
        </>

    )
}

