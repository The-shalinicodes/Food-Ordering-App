import { BIRYANI_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
  const {resData}=props;

  const{
    name,
    avgRating,
    cusines,
    deliveryTime,
  }=resData?.data;

  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img 
      className="res-logo"
      alt="res-logo" 
      src={BIRYANI_URL}></img>
      <h3>{name}</h3>
      <h4>{cusines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
}

export default RestaurantCard;