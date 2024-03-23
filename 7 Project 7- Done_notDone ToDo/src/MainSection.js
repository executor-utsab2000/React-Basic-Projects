import React, { useEffect, useState } from "react";
import styles from './MainSection.module.css'
import ListContainer from "./Components/ListContainer";


export default function MainSection(){
    
    const [tolistData,setTolistData] = useState([]) 
// ----------------------------------------------------------------------------

    async function ApiListDataFetch(){
        
        const url="https://jsonplaceholder.typicode.com/todos";
        const response = await fetch(url);
        const receivedApiData= await response.json();
        // console.log(receivedApiData);
        setTolistData(receivedApiData )
    }
        useEffect(()=>{
            ApiListDataFetch()
        },[]);
        // [] is used to stop rendering the api again and again
// ----------------------------------------------------------------------------

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <span className={styles.header}>To Do List</span> <br />
                        <span className={styles.desc}> ( Using Fetch Api by Async Wait Function ) </span> <br />
                        <hr className="mt-2 mb-5"/>                        
                        
                        <div className="row">




                            {
                                tolistData.map((objects)=>{
                                    // console.log(objects);
                                    const { userId , id , title , completed} = objects;

                                   return(
                                    
                                    <div className="col-lg-4 col-md-6 d-flex justify-content-center my-3">
                                    <ListContainer title={title} doneORnot={completed}/>
                                    </div>
                                   )
                                })
                            }




                        </div>
                    </div>
                </div>
            </div>
        )
    
    
    
    
}