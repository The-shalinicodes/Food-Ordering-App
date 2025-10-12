import React from "react";
import RestaurantCard from "./RestaurantCard";

const Body=()=>{
  return(
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian,Asian"/>
        <RestaurantCard
          resName="KFC"
          cuisine="Burger, Fast Foods"/>
      </div>
    </div>
  );
}

export default Body;