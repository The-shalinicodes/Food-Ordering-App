import React from "react";
import UserClass from "./UserClass.js";

console.log("About.js FILE LOADED");

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent ComponentDidMount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About Us Page</h1>
                <p>This is the about us page of our Food Ordering App.</p>
                <UserClass
                    name={"Shalini(classes)"}
                    location={"Tirupati(class)"}
                    contact={"8247091609(class)"}
                />
            </div>
        );
    }
}

export default About;
