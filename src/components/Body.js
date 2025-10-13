import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/data";
import {useState} from "react";

const Body=()=>{
  //Local State variable-SuperPowerful Variable
  const arr=useState(resList);
  // const[listOfRestaurants,setListOfRestaurant]=arr;//array destructuring

  const listOfRestaurants=arr[0];
  const setListOfRestaurant=arr[1];
  return(
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn" 
          onMouseOver={()=>{
            
            const filteredList=listOfRestaurants.filter(
              (res)=>parseFloat(res.data.avgRating)>=4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant)=>(
          <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
        ))}
      </div>
    </div>
  );
}

export default Body;