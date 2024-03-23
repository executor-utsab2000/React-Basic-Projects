import React from "react";
import ExpenseCardStyle from './ExpensItemTableCard.module.css'


export default function ExpenseItemTableCard( props ){
// console.log(props);
    const fulldate =props.ExpenseDate;
  

    const date = fulldate.getDate();
    const month = fulldate.getMonth();
    const year =fulldate.getFullYear();


    const MonthArray = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];


    return(
        <>        
            <table>
                <tbody>
                <tr>
                    <td>
                        <span className={ExpenseCardStyle.id}>{props.ExpenseDataId}</span>
                    </td>
                    <td>
                       <div className={ExpenseCardStyle.dateContainer}> 
                            <p className={ExpenseCardStyle.date}> {date} </p>
                            <p className={ExpenseCardStyle.month}> {MonthArray[month]} </p>
                            <p className={ExpenseCardStyle.year}> {year}</p>
                       </div> 
                    </td>



                    <td>
                    <span className={ExpenseCardStyle.title}> {props.ExpenseTitle}</span> 
                    </td>
                    <td>
                    <span className={ExpenseCardStyle.amount}> ₹ {props.ExpenseAmount} /- </span> 
                    </td>

                </tr>
                </tbody>
            </table>
          
  
        </>
    )
}