


import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.624500170617656&lng=79.43102521810513&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();

    // Extract ONLY restaurant cards from API
    const restaurants = json?.data?.cards
      ?.map((card) => card?.card?.card?.info)
      ?.filter((info) => info !== undefined);

    setListOfRestaurant(restaurants);    // original list
    setFilteredRestaurants(restaurants); // UI list
  };

  // Show shimmer while loading
  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter">

        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="search-btn"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered); // UPDATE UI
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const topRated = listOfRestaurants.filter(
              (res) => res.avgRating >= 4.0
            );
            setFilteredRestaurants(topRated); // UPDATE UI
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            resData={{ info: restaurant }}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
