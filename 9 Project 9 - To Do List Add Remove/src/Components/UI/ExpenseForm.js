import React from "react";
import expenseformStyle from './ExpenseForm.module.css';






export default function ExpenseForm (props){
    
    
        const [ expTitle , setExpTitle ]=React.useState('');
        const [ expDate , setExpDate ]=React.useState('');
        const [ expAmount , setExpAmount ]=React.useState('');
    

        const titleChanger = (event)=> {
              setExpTitle(event.target.value);  
        }
    
        const dateChanger = (event)=> {
            setExpDate(event.target.value);  
      }
      
      const amountChanger = (event)=> {
        setExpAmount(event.target.value);  
  }
    
  
  
  const SubmitForm=(event)=>{
      event.preventDefault();
      
      const formData ={
          title: expTitle,
          date : expDate , 
          amount : expAmount 
        } 

            // console.log(formData);
            props.insertedFormData(formData)
        
            setExpTitle("");  
            setExpDate("");  
            setExpAmount("");  
        }
    
    return(
        <>

           <div className={expenseformStyle.expenseFormContainer}>
               <form action="#" onSubmit={SubmitForm}>
                <table>
                    <tbody>
                    <tr>
                        <td colSpan={2}>
                        <div className={expenseformStyle.coolinput}>
                            <label htmlForfor="input">Name:</label>
                            <input type="text" placeholder="Write here..." value={expTitle} onChange={titleChanger} required/></div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                        <div className={expenseformStyle.coolinput}>
                            <label htmlForfor="input">Date:</label>
                            <input type="date" placeholder="Write here..." value={expDate} onChange={dateChanger} required/></div>
                        </td>

                        <td>
                        <div className={expenseformStyle.coolinput}>
                            <label htmlForfor="input">Amount:</label>
                            <input type="number" placeholder="Write here..." value={expAmount} onChange={amountChanger} required/></div>
                        </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <button type="submit">Submit</button>
                      </td>
                    </tr>
                    </tbody>
                </table>                
                </form> 
           </div>
        
        
        </>
    )
}


