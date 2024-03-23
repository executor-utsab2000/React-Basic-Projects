import React from "react";
import contactSectionStyle from './ContactFormSection.module.css';


export default function ContactFormSection(){









    const SubmitForm = (event)=>{
        event.preventDefault();
    }


    
    return(
            <>
        <div className={contactSectionStyle.bg}>
            <div className={`container ${contactSectionStyle.container}`}>
                    <div className={contactSectionStyle.formContainer}>
                     <form action="" onSubmit={SubmitForm}>
                        <div className="row">
                            
                            <div className="col-12 my-3">
                                    <div className="row">
                                        <div className="col-lg-6 d-flex justify-content-center my-3">
                                            <input type="text" name="" className="#" placeholder="Enter First Name " />
                                        </div>
                                        <div className="col-lg-6 d-flex justify-content-center my-3">
                                            <input type="text" name="" className="#" placeholder="Enter Last Name" />
                                        </div>
                                    </div>
                            </div>

                            <div className="col-12 my-3">
                                    <div className="row">
                                        <div className="col-lg-6 d-flex justify-content-center my-3">
                                            <input type="text" name="" className="#" placeholder="Enter Contact Number" />
                                        </div>
                                        <div className="col-lg-6 d-flex justify-content-center my-3">
                                            <input type="Date" name="" className="#" />
                                        </div>
                                    </div>
                            </div>
                            <div className="col-12 my-3 d-flex justify-content-center">
                                <textarea type="text" name="" className="#" placeholder="Enter Residential/Work Address" rows={5} />
                            </div>
                        
                            <div className="col-12 my-3 d-flex justify-content-center">
                                <textarea type="text" name="" className="#" placeholder="Enter Additional Info" rows={7} />
                            </div>

                            <div className="col-12 my-3 d-flex justify-content-center">
                                <button>Submit</button>
                            </div>
                        </div>
                        </form>   
                    </div>
            </div>
        </div> 
        {/* <i class="fa-regular fa-copyright pe-2"></i> */}
           
            
            </>
    )
}