import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/data";

const Body=()=>{

  let ListOfRestaurants=[
    {
    type:"restaurant",
    data:{
      id:"334475",
      name:"KFC",
      cusines:["Burgers","Biryani","American","Snacks","Fast Food"],
      deliveryTime:"36 minutes",
      avgRating:"3.8 stars",
    },
  },
  {
    type:"restaurant",
    data:{
      id:"334476",
      name:"Dominos",
      cusines:["Burgers","Biryani","American","Snacks","Fast Food"],
      deliveryTime:"30 minutes",
      avgRating:"4.0 stars",
    },
  },
];
  return(
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn" 
          onMouseOver={()=>{
            ListOfRestaurants=ListOfRestaurants.filter(
              (res)=>res.data.avgRating>4
            );
            console.log(ListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant)=>(
          <RestaurantCard key={restaurant.data.id}resData={restaurant}/>
        ))}
      </div>
    </div>
  );
}

export default Body;