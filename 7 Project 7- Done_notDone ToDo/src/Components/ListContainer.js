import React from "react";

import styles from './ListContainer.module.css';


export default function ListContainer(props){

    const alertme=()=>{
        alert("hiii")
    }

    return(

        <div className={`${styles.listContainer} ${props.doneORnot ? styles.ifdone : styles.ifnotDone}`} onClick={alertme}>
            {/* using of two classes from module one by ternary operator and otehr  normally */}
            <div>
                {props.title}
            </div>
        </div>

        {}

    )

}