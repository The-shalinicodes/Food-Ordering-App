import RestaurantCard from "./RestaurantCard.js";
import {useState} from "react";//should be imported as named import
import resList from "./utils/mockData.js";

const Body = () => {
  //State Variable- Super powerful variable
  const [listOfRestaurants,setListOfRestaurant]=useState(resList);


  return (
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