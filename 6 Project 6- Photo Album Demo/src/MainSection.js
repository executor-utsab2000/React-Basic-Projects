import React, { useEffect, useState } from "react";
import PhotoCard from "./Component/PhotoCard";
import styles from './MainSection.module.css'





// export default ApiDataFetch;


export default function MainSection(){

const [data, setData] = useState([])


// ------------------------------------------------------------------------------------
// async function to fetch API data

    async function ApiDataFetch(){
    
        const url='https://jsonplaceholder.typicode.com/photos';
        const response = await fetch(url)
        // console.log(response);
        const data = await response.json();
        // console.log(data);
        setData(data)    
    }
        

    useEffect(()=>{
        ApiDataFetch();
    },[])
   
// ---------------------------------------------------------------------------------------
    return(
        
        <div className="container mt-5">
            
            <div className="row">
                <div className="col-12 text-center mb-5 ">
                       <span className={styles.header}>A Demo Photo Album </span> <br />
                       <span className={styles.txt2}> ( 🇺‌🇸‌🇮‌🇳‌🇬‌ 🇦‌🇵‌🇮‌ 🇫‌🇪‌🇹‌🇨‌🇭‌ )  </span>
                       <hr />
                </div>
            </div>

            <div className="row m-0 mt-5">

            {
                data.map((val)=>{

                    const {albumId , id , title , url , thumbnailUrl} = val;
                    // console.log(thumbnailUrl);

                    return(
                        <div className="col-lg-4 d-flex justify-content-center my-3 mx-0 p-0">
                              <PhotoCard title={title} image={url}/>  
                        </div>
        
                    )
                })
            }        

            </div>
        </div>
    )
}

