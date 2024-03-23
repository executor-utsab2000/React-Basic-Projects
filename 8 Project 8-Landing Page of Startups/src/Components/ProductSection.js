import React, { useState } from "react";
import styles from './ProductSection.module.css';

import ProductData from "./Component Data/ProductData";
import OneProductComponent from "./UI/OneProductComponent";

export default function ProductSection() {
  const [pdtData, setPdtData] = useState(ProductData);
  console.log(pdtData);







  return (
    <div className="container my-5">
      
        <div className={`row text-center ${styles.headerDimension}`}>
            <div className="col-12">
                <div className="container px-0 px-lg-5 ">
                     <div className="row  ">
                        <div className="col-12 px-2 px-lg-5">
                            <span className={styles.txt1}>Reach Goals that Matters</span>  <br /><br />
                            <span className={styles.pdtSecionHeader}> One product, unlimited solutions</span> <br /><br />
                            <span className={styles.description}> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</span> <br /><br />
                        </div>
                     </div>
                </div>
            </div>
        </div>









      <div className="row my-3 ">

        <div className="col-12 my-5">
          <div className="row">
                  <div className="col-lg-6 pe-5 pt-5 my-4 my-lg-o ps-5 ps-lg-0 ">
                     <OneProductComponent />
                   </div>

                  <div className="col-lg-6 d-flex justify-content-center">
                     <img src={pdtData[0].image} alt="Image" className={styles.productImage}  />
                  </div>
          </div>
        </div>

        <div className="col-12 my-5 ">
          <div className="row">
                  <div className="col-lg-6  order-lg-0 order-1 d-flex justify-content-center">
                     <img src={pdtData[1].image} alt="Image"  className={styles.productImage}/>
                  </div>

                  <div className="col-lg-6 ps-5 pt-5 my-4 my-lg-o ">
                     <OneProductComponent />
                   </div>
          </div>
        </div>  



        <div className="col-12 my-5">
          <div className="row">
                  <div className="col-lg-6 pe-5 pt-5 my-4 my-lg-o ps-5 ps-lg-0 ">
                     <OneProductComponent />
                   </div>

                  <div className="col-lg-6 my-3 my-lg-0 d-flex justify-content-center">
                     <img src={pdtData[2].image} alt="Image"  className={styles.productImage}/>
                  </div>
          </div>
        </div>

        



      </div>


      <hr />
      
    </div>










  );
}


























// {
//     pdtData.map((dataObject)=>{
//         const {stylistTxt , header , desc , point1 , point2 , point3 } = dataObject
//         // console.log(stylistTxt);

//         return(

//             <div className="col-12 my-5">
//                 <div className="row">
//                     <div className="col-lg-6 pe-5 "> <OneProductComponent/> </div>
//                     <div className="col-lg-6"> <img src="#" alt="Image" /> </div>
//                 </div>
//             </div>

//         )
//     })
// }
