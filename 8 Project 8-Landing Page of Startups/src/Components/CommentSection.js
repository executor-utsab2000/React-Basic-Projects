import React, { useState } from "react";
import CommentStyles from "./FeaturesSection.module.css";
import CommentData from "./Component Data/CommentData";
import CommentCard from "./UI/CommentCard";

export default function CommentSection() {

const [data, setData]= useState(CommentData)

  return (

      <div className="container mb-5">
        <div
          className={`row text-center ${CommentStyles.headerDimension}`}>
          <div className="col-12 px-5">
            <div className="container px-0 px-lg-5 ">
              <div className="row  ">
                <div className="col-12 px-2 px-lg-5">
                  <span className={CommentStyles.pdtSecionHeader}> Don't take our word for it </span>
                  <br />
                  <br />
                  <span className={CommentStyles.description}>                    
                    Vitae aliquet nec ullamcorper sit amet risus nullam eget
                    felis semper quis lectus nulla at volutpat diam ut venenatis
                    tellus—in ornare.
                  </span>

                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>




    <div className="row">
        {
            data.map((commentData) => {
                   const {profileImage , comment , name } = commentData ;
                   console.log(name);

               return(
                <div className="col-lg-4 d-flex justify-content-center my-3 mx-auto my-lg-0 ">
                     <CommentCard image={profileImage} comment={comment} name={name}/>
                </div>
               )
            })
        }
    </div>






        {/* <hr /> */}
      </div>
 
  );
}
