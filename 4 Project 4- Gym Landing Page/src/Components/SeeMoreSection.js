import React from "react";
import styles from './SeeMoreSection.module.css'


export default function SeeMoreSection(){
    return(

            <div className={styles.SeeMorebg}>
                <div className="content">

                <div className="instaIcon">
                <i class="fa-brands fa-instagram text-warning"></i>
                </div>
                <div className={styles.text1}>See more, Follow us on</div>
                <div className={styles.text2}>
                    Instagram
                    <span className="text-warning px-2">@amazingsportclub</span>
                </div>

                </div>
            </div>










    )
}