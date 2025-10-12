import React from "react";
import RestaurantCard from "./RestaurantCard";

const Body=()=>{
  return(
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn" 
          onClick={()=>{
            console.log("Button Clicked")}}
            >
              Top Rated Restaurants
            </button>
      </div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian,Asian"
          rating="4.4 stars"
          deliveryTime="38 minutes"/>
          
        <RestaurantCard
          resName="KFC"
          cuisine="Burger, Fast Foods"
          rating="5.0 stars"
          deliveryTime="30 minutes"/>
      </div>
    </div>
  );
}

export default Body;