import React , {useState} from "react";

import styles from './Form.module.css'
import Button from "./Button";


export default function Form(){

    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');




    const updateName= (event) =>{
        setName(event.target.value)
    }

    const updateEmail= (event) =>{
        setEmail(event.target.value)
    }

    const updateDescription= (event) =>{
        setDescription(event.target.value)
    }



    const submitForm = (event)=>{
        event.preventDefault();

        const formData={
            name: name,
            email : email,
            description: description
        } 

        setName('')
        setEmail('')
        setDescription('')


        console.log(formData);
    }

    return(

        <>                  

            <div className={styles.formTopBtn}>                
                <Button  icon="fa-regular fa-message" text="VIA SUPPORT CHAT"/>
                <Button  icon="fa-solid fa-phone" text="VIA CALL"/>
            </div>

            <div className="my-4">
            <Button outline={true}  icon="fa-regular fa-message" text="VIA SUPPORT CHAT"/>
            </div>

            <form onSubmit={submitForm}>
            
            <div class={styles.coolinput}>
                    <label for="input" class="text">Name:</label>
                    <input type="text" placeholder="Write here..." name="input" value={name} onChange={updateName} />
                </div>

                <div class={styles.coolinput}>
                    <label for="input" class="text">Email:</label>
                    <input type="email" placeholder="Write here..." name="input" value={email} onChange={updateEmail} />
                </div>

                <div class={styles.coolinput}>
                    <label for="input" class="text">Text:</label>
                    <textarea type="text" placeholder="Write here..." name="input" value={description} rows={5} onChange={updateDescription} />
                </div>

                <div className={styles.sumitBtnPos}>
                    <Button text="SUBMIT"/>
                </div>




            </form>        
      
         
        
    
        </>


)
}
