import React from "react";
import ReactDOM from "react-dom/client";  

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img 
          className="logo" 
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" 
          alt="Food Logo" 
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard=()=>{
  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img 
      className="res-logo"
      alt="res-logo" 
      src="https://www.shutterstock.com/image-photo/traditional-chicken-biryani-served-brass-600nw-2622739739.jpg"></img>
      <h3>Meghana Foods</h3>
      <h4>Biryani, Noth Indian,Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
}

const Body=()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container"></div>
      <RestaurantCard/>
    </div>
  );
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  ); 
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
