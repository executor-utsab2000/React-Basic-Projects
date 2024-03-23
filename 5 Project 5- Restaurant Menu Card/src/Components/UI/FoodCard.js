import React from "react";
import FoodItemCardStyle  from './FoodCard.module.css'





export default function FoodCard(props) {
    // console.log(props);
    return(
        
            <div className={FoodItemCardStyle.foodItemContainer}>
                <div className="row">
                    <div className="col-5">
                        <img src={props.image} alt="Food Pics" />
                    </div>

                    <div className={`col-7 p-3 ${FoodItemCardStyle.foodDetailscContainer}`}>
                        <div className={FoodItemCardStyle.FoodHeader}>{props.header}</div>
                        <div className={FoodItemCardStyle.foodDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>

                         <div className={FoodItemCardStyle.priceOrderBtn}>
                        <div className="row justify-content-between">
                            <div className="col-5 pt-2 ">Price : ₹ {props.price}</div>
                            <div className="col-7">
                            <button className={FoodItemCardStyle.orderBtn}>Order Name</button>
                             </div>
                        </div>    
                         </div>  

                         <div className={FoodItemCardStyle.noticeTxt}> * Prices may vary on selected date.</div> 
                    
                     </div>
                </div>
            </div>



    )
}