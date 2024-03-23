import React from "react";
import styles from "./OneProductComponent.module.css";




export default function OneProductComponent() {
  return (

    <div className={styles.cardContainer}>
    
      <span className={styles.stylishTxt}>More speed. Less spend</span> <br />
      <span className={styles.header}>Keep projects on schedule</span> <br /> <br />
      <span className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> <br /> <br /><br />
      
      <span className={styles.points}>
      <i class="fa-solid fa-check pe-3"></i>Duis aute irure dolor in reprehenderit  <br />
      <i class="fa-solid fa-check pe-3"></i>Excepteur sint occaecat   <br />
      <i class="fa-solid fa-check pe-3"></i>Amet consectetur adipiscing elit   <br />
      </span>
    
    </div>

  );
}
