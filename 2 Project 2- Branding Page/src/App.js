import React, { useState } from "react";

import Navbar from "./Components/Navbar";
import ContentText from "./Components/ContentText";
import ContentRightImg from "./Components/ContentRightImg";





function App() {
  

  return (
    <>
    < Navbar />
    <div className="container mt-4">
    <div className="row">
      <div className="col-lg-6 px-2">
      <ContentText />
      </div>

      <div className="col-lg-6 d-flex justify-content-center">
      <ContentRightImg />
      </div>
  
    </div>
    </div>
    </>
  
  );
}

export default App;
