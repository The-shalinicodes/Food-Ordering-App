import RestaurantCard from "./RestaurantCard.js";
import {useState,useEffect} from "react";//should be imported as named import
import Shimmer from "./Shimmer.js"

const Body = () => {
  //State Variable- Super powerful variable
  const [listOfRestaurants,setListOfRestaurant]=useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.624500170617656&lng=79.43102521810513&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const json=await data.json();
    console.log(json);
    setListOfRestaurant(json?.data?.cards);
  };

  return listOfRestaurants.length===0 ?<Shimmer/>:(
    <div className="body">
      <div className="filter">
        <button className="filter-btn" 
        onClick={()=>{
          
          const filteredList = listOfRestaurants.filter((res) => {
            const info = res?.card?.card?.info || res?.info;
            return info?.avgRating >= 4.0;
          });
          setListOfRestaurant(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id || restaurant?.card?.card?.info?.id || Math.random()}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;