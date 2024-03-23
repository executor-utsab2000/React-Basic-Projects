import React from "react";
import BelowCommentStyles from './BelowCommentCard.module.css'



export default function BelowCommentCard(){
    return(
        <div className="container" style={{marginTop:"8rem"} }>
            <div className="row">
                <div className={`col-12 ${BelowCommentStyles.SectionBg}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <span className={BelowCommentStyles.headerTxt}>Stay in the Loop</span> <br />
                                <span className={BelowCommentStyles.desc}>Join our newsletter to get top news before anyone else.</span>
                            </div>

                            <div className="col-lg-6 d-flex justify content-center mt-5 my-lg-0">
                                    <div className="row">
                                        <div className="col-md-8 my-3 my-lg-0"><input type="email" placeholder="Enter Your Email" /></div>
                                        <div className="col-md-4">  <input type="button" value="Subscribe" /></div>
                                    </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}





{/* 
                                   */}