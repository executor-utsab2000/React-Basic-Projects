import React, { useState } from "react";
import FormatCard from "./UI/FormatCards";
import styles from "./FormatSection.module.css";

import FormatSectionData from "./UI/FormatCardData";

export default function FormatSection() {
  const [arrayData, setArrayData] = useState(FormatSectionData);

  return (
    <div className={styles.FormatSectionBg}>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12">
            <span className={styles.formatSectionHeader}>𝐅𝐨𝐫𝐦𝐚𝐭𝐬</span>
          </div>
          <div className="col-12">
            <div className="row">



              {arrayData.map((ArrayData) => {
                const { title, imgsrc } = ArrayData;

                return (
                  <div className="col-lg-4 col-md-6 justify-content-center d-flex">
                    <FormatCard img={imgsrc} title={title}/>
                  </div>
                );
              })}




            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
