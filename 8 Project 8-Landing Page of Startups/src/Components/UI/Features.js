import React from "react";
import featureStyles from "./Features.module.css";  

export default function FeaturesCard(props) {
  return (


    <div class={`card py-4  ${featureStyles.card}`}>
     <i class={props.icon}></i>
      <div class="card-body ">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">
        {props.description}
        </p>        
      </div>
    </div>


  );
}
