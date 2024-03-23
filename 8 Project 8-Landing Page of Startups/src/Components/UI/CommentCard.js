import React from "react";
import commentStyles from "./CommentCard.module.css";

export default function CommentCard(props) {
  return (


    // image sec
    <div class={`card ${commentStyles.commentCardContainer}`} >
      <img src={props.image} class="card-img-top" alt="..." />

      <span className={commentStyles.semicolon}> ''  </span>      

    {/* comment sec */}
      <div class="card-body mt-4">
        <p class="card-text" style={{fontStyle:'italic'}}>
            {props.comment}
        </p>

        <hr />

    {/* footer sec */}
        <div className="d-flex justify-content-center">
        <span className={commentStyles.txt1}>Name of Person</span>
        <span className={commentStyles.txt2}>-</span>
        <span className={commentStyles.txt3}>{props.name}</span>
        </div>



      </div>
    </div>
  );
}

