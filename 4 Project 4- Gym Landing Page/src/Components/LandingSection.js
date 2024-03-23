import React from "react";
import styles from './LandingSection.module.css'






export  default function LandingSection(){
    return(
       <div className={styles.landingContentBg}>
        <div className={`container ${styles.content}`}>
            <div className={styles.header}>𝐓𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦 𝐘𝐨𝐮𝐫𝐬𝐞𝐥𝐟</div> 

            <div className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto reprehenderit architecto delectus iure suscipit officia eaque fuga quos recusandae labore voluptate, exercitationem vero fugiat eius. Illum . 
            </div>

            <button className={styles.button}>VIEW ALL CLASSES</button>
            
        </div>
       </div>
    )
}