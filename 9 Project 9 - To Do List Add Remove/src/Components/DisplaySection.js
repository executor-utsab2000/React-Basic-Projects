import React, { useEffect, useState } from "react";
import displayStyles from './DisplaySection.module.css'
import ExpenseForm from "./UI/ExpenseForm";
import ExpenseItemContainer from "./UI/ExpenseItemContainer";
import ExpenseItemTableCard from "./UI/ExpenseItemTableCard";


const FormDataArray=[]



export default function DisplaySection( props ){



    const[arrayData , updateArrayData] =  useState(FormDataArray)
    // console.log(arrayData);

    const [objectId , updatedObjectId ]=useState(0);

// creating a function to bring data from child by props
    const FormValueFetch=(formExpenseData)=>{
        // console.log(formExpenseData);
        const updatedArray =[...arrayData , {...formExpenseData , objectId :objectId  }]
        // console.log(updatedArray);
        updatedObjectId(objectId+1) //increases value by one in each re render
        updateArrayData(updatedArray);
        
}


const removeItem =(expenseItemId) => {
  const removedItemArray =  arrayData.filter((expenseItemArray) => {
    console.log(expenseItemArray.objectId);
    console.log(expenseItemId);
    return    expenseItemArray.objectId != expenseItemId
    })
    updateArrayData(removedItemArray)
    // alert(expenseItemId)
}





    return(
    <>

        <ExpenseForm insertedFormData={FormValueFetch}/>


        {
            arrayData.map((expenses , index)=>{
            // console.log(expenses);
            

            
                const {title , date , amount , objectId } = expenses ; 
                // console.log(id);

                return(
                    <ExpenseItemContainer key={index}>
                    <table className={displayStyles.tablePrint} >
                        <tbody>
                        <tr>
                            <td>
                                <ExpenseItemTableCard ExpenseTitle={title} ExpenseDate={new Date(date)} ExpenseAmount={amount} ExpenseDataId={index+1}/>
                            </td>
                            <td>
                                {/* wrapping the function since it is imedietly invoked in this types of cases ....when we call function with parameters*/}
                                <button onClick={ () => removeItem(objectId)}>Remove </button> 
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </ExpenseItemContainer>
                )
            })
        }



    </>
)
}



// the element serial no  passed to Child ( Expense Table Cars.js ) through props (  ExpenseDataId={index+1}  )  in element  ExpenseItemTableCard 
// has no relation with the
//  id of objects in array  ( objectId )




// the serial no of items is basically the index no of objects in Array( FormDataArray ) 
// since index no starts from 0 so +1 is done to make the starting as 1


// on click of Remove button it filters the objects in array with id on the element is clicked and removes it    =>     return    expenseItemArray.objectId != expenseItemId 




