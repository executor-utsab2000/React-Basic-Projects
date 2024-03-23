import React from "react";
import ExpenseCardStyle from './ExpenseItemContainer.module.css'







export default function ExpenseItemContainer( props ){

    return(
        <>
        
        <div className={ExpenseCardStyle.cardContainer}>
            {props.children}  
        </div>
        
        {/* using props.children to add any elements in parent function when the component is called */}
       
        
        </>
    )
}