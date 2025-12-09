import { useEffect } from "react";

const RestaurantMenu=()=>{

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.624500170617656&lng=79.43102521810513&restaurantId=211325&catalog_qa=undefined&query=Biryani&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    };
    return(
        <div className="menu">
            <h1>Restaurant Menu Page</h1>
            <p>This is the restaurant menu page of our Food Ordering App.</p>
            <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>Pasta</li>
                <li>Salad</li>
                <li>Desserts</li>
            </ul>
        </div>
    );
};
export default RestaurantMenu;