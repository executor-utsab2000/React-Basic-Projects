    import React, { useState } from "react";
    import FeatureStyles from './FeaturesSection.module.css';

    import FeaturesData from "./Component Data/FeaturesData";
import FeaturesCard from "./UI/Features";

    export default function FeaturesSection(){
        
     const [featuresData , setFeaturesData] =useState(FeaturesData)     
    //  console.log(featuresData);
          
        

        

        
        
        
        
        return(

            <>
            
                <div className="container">

                <div className={`row text-center  ${FeatureStyles.headerDimension}`}>
                <div className="col-12 px-5">
                <div className="container px-0 px-lg-5 ">
                     <div className="row  ">
                        <div className="col-12 px-2 px-lg-5">    
                            <span className={FeatureStyles.pdtSecionHeader}> The majority our customers do not understand their workflows.</span> <br /><br />
                            <span className={FeatureStyles.description}> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span> <br /><br />
                        </div>
                     </div>
                </div>
            </div>
        </div>


                <div className="row mx-auto">

                {
                    featuresData.map((featureData)=>{
                        console.log(featureData);
                        const { icon , title , description} = featureData;

                        return(
                            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
                                <FeaturesCard icon={icon} tite={title} description={description}/>
                            </div>
                        )
                    })
                }

                </div>



                <hr />
                </div>
            
            
            
            
            
            
            
            
            
            
            
            </>

        )
    }