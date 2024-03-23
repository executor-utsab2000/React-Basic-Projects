
import React from "react";
import styles from './Button.module.css'



export default function Button(props){
    return(

        <button className={props.outline ? styles.outlineButton : styles.blackButton}>
            {/* using ternary operator   */}
        <i class={props.icon}></i>
        {props.text}
     </button>

    )
}