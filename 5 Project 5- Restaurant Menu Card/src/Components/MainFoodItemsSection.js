import React, { useState } from "react";
import MenuItemsData from "./UI/MenuItemsData";
import FoodCard from "./UI/FoodCard";





export default function MainFoodItemSection(props) {
  const [items, setItems] = useState(MenuItemsData);

  // console.log(items)
  return (
    <>
      <div className="row m-0">
        <div className="col-12 d-flex justify-content-center">
          <div className="container">
            <div className="row">


              {items.map((fooditems) => {
                const {id, image, header, description, category, price } =
                  fooditems;
                console.log(header);

                return (
                  <div className="col-lg-4 d-flex justify-content-center my-3">
                    <FoodCard header={header} price={price} image={image} />
                  </div>
                );
              })}


            </div>
          </div>
        </div>
      </div>
    </>
  );
}
