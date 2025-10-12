import { BIRYANI_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
  const {resName,cuisine,rating,deliveryTime}=props;
  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img 
      className="res-logo"
      alt="res-logo" 
      src={BIRYANI_URL}></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
}

export default RestaurantCard;