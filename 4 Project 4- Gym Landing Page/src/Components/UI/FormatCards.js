import React from "react";
import styles from './FormatCard.module.css';

export default function FormatCard(props){

// const imgSrc=props.img;
// console.log(imgSrc);

const imgSrcstyle= { background: `url(${props.img})` }


    

    return(

        <div className={styles.cardContainer} style={imgSrcstyle}>
        <div className={styles.formatTxt}>
            <span className={styles.header}>{props.title}</span>
            <br/>
            <span className={styles.text}>Lorem ipsum dolor sit.</span>
        </div>
    </div>


    )
}