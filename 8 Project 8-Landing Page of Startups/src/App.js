import React from "react";
import './App.css'

import ProductSection from "./Components/ProductSection";
import FeaturesSection from "./Components/FeaturesSection";
import CommentSection from "./Components/CommentSection";
import BelowCommentCard from "./Components/UI/BelowCommentCard";
import Footer from "./Components/UI/Footer";
import Navbar from "./Components/UI/Navbar";
import BelowNavSection from "./Components/BelowNavSection";

 






function App() {
  

  return (
    <>



      <Navbar/>
      <BelowNavSection/>
     <FeaturesSection/>
     <ProductSection/>
     <CommentSection/> 
     <BelowCommentCard/>
     <Footer/>




















    </>
  
  );
}

export default App;
