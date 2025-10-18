import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/data";
import {useState,useEffect} from "react";
import Shimmer from "./shimmer";

const Body=()=>{
  //Local State variable-SuperPowerful Variable
  const arr=useState([]);
  const[listOfRestaurants,setListOfRestaurant]=arr;//array destructuring
  // const listOfRestaurants=arr[0];
  // const setListOfRestaurant=arr[1];
  const [filteredRestraunt,setFilteredRestaurant]=useState([]);
  const [searchText,setSearchText]=useState("");

  console.log("Body Rendered");
  
  useEffect(()=>{
    console.log("useEffect Called");
    fetchData();
  },[]);

  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97&lng=77.59");
    const json=await data.json();
    console.log(json);
    setListOfRestaurant(resList);
    setFilteredRestaurant(resList);
    
  } 
  //Conditional Rendering
  // if(listOfRestaurants.length==0){
  //   return <Shimmer/>;
  // }

  return listOfRestaurants.length==0?<Shimmer/>:(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
            type="text" 
            className="search-box" 
            value={searchText} 
            onChange={(e)=>{
              setSearchText(e.target.value)
            }}
          />
          <button 
            onClick={()=>{
            //Filter Res Cards and update the UI
            console.log(searchText);
            const filtered=listOfRestaurants.filter(
              (res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurant(filtered);
          }}
        >
          Search
        </button>
      </div>
      <button 
        className="filter-btn" 
        onMouseOver={()=>{
          const filteredList=listOfRestaurants.filter(
            (res)=>parseFloat(res.data.avgRating)>=4
          );
          setFilteredRestaurant(filteredList);
        }}
      >
      Top Rated Restaurants
      </button>
    </div>
      <div className="res-container">
        {filteredRestraunt.map((restaurant)=>(
          <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
        ))}
      </div>
    </div>
  );
}

export default Body;