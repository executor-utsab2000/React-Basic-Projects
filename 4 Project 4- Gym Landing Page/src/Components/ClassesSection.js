import React from "react";
import styles from "./ClassesSection.module.css";
import Classes from "./UI/Classes";

export default function ClassesSection() {

    const classCardDetails=[
        {
            header:"Crossfit",
            image:"https://images.unsplash.com/photo-1584380931214-dbb5b72e7fd0?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            header:"    Combine Activities",
            image:"https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            header:"Boxing Classes",
            image:"https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            header:"Personal Training",
            image:"https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            header:"Bodybuilding",
            image:"https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            header:"Trx Training",
            image:"https://images.unsplash.com/photo-1616279969856-759f316a5ac1?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            header:"Rowing",
            image:"https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            header:"Barbell Club",
            image:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            header:"Additional Classes",
            image:"https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]



  return (

    <div className={styles.classesSectionBg}>
      <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-12">
                <span className={styles.ClassesSectionHeader}>Classes for all levels</span>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-lg-4 col-md-6 justify-content-center d-flex">
                        <Classes header={classCardDetails[0].header} image={classCardDetails[0].image}/>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 justify-content-center d-flex">
                        <Classes header={classCardDetails[1].header} image={classCardDetails[1].image}/>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 justify-content-center d-flex">
                        <Classes header={classCardDetails[2].header} image={classCardDetails[2].image}/>
                    </div>
                    <div className="col-lg-4 col-md-6 justify-content-center d-flex">
                        <Classes header={classCardDetails[3].header} image={classCardDetails[3].image}/>
                    </div>
                    <div className="col-lg-4 col-md-6 justify-content-center d-flex">
                        <Classes header={classCardDetails[4].header} image={classCardDetails[4].image}/>
                    </div>
                    <div className="col-lg-4 col-md-6 justify-content-center d-flex">
                        <Classes header={classCardDetails[5].header} image={classCardDetails[5].image}/>
                    </div>
                    <div className="col-lg-4 col-md-6 justify-content-center d-flex">
                        <Classes header={classCardDetails[6].header} image={classCardDetails[6].image}/>
                    </div>
                    <div className="col-lg-4 col-md-6 justify-content-center d-flex">
                        <Classes header={classCardDetails[7].header} image={classCardDetails[7].image}/>
                    </div>
                    <div className="col-lg-4 col-md-6 justify-content-center d-flex">
                        <Classes header={classCardDetails[8].header} image={classCardDetails[8].image}/>
                    </div>
                </div>
            </div>
        </div>
      </div>    
    </div>

  );
}
