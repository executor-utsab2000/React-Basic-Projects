import React from "react";
import styles from './Classes.module.css';

export default function Classes(props){
    return(

        <div className={styles.classCardContainer}>
        <div className={styles.cardTitle}>{props.header}</div>
        <img src={props.image}  alt="" />
        <div className={styles.text}>
          Lorem ipsum dolor sit,consectetur adipisicing elit. Laboriosam iusto
          ttur laudantiumLorem ipsum dolor sit,consectetur adipisicing elit. Laboriosam iusto
          ttur laudantium .
        </div>
  
        <span className={styles.learnMore}>
          <a href="#">LEARN MORE</a>
        </span>
      </div>


    )
}