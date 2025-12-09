import User from "./User.js"
import UserClass from "./UserClass.js";

const About=()=>{
    return(
        <div>
            <h1>About Us Page</h1>
            <p>This is the about us page of our Food Ordering App.</p>
            <User name={"Shalini(function)"}/>
            <UserClass name={"Shalini(classes)"}/>
        </div>
    );
};
export default About;

