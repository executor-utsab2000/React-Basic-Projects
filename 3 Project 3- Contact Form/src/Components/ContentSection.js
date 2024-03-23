import React from "react";
import styles from "./ContentSection.module.css";
import ContactHeader from "./ContactHeader";
import Form from "./Form";


export default function ContentSection() {
  return (
        <div className="container">
            <div className="row">

                <div className="col-12 mt-5 mb-3">
                    <ContactHeader/>
                </div>



                <div className="col-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <Form/>
                        </div>
                        <div className="col-lg-6">
                            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1649785851474-24-7%20Customer%20Service%20Tech%20Support.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
