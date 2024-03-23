import React, {useState} from "react";
import styles from './PhotoCard.module.css';




export default function PhotoCard(props){
    return(
        <div className={styles.cardContainer}>
            <div className="row m-0">
                <div className="col-5 p-0">
                    <div>
                        <img src={props.image} alt="" className={styles.image}/>
                    </div>
                </div>

                <div className="col-7">
                    <div className={styles.title}>{props.title}</div>
                </div>
            </div>
        </div>
    )
}