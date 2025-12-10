import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state={
            count1:0,
            count2:1,
        };
    }
    render(){
        const{name,location,contact}=this.props;
        const {count1,count2}=this.state;
        return (
            <div className="user-card">

                <h1>Count 1:{count1}</h1>
                <h1>Count 2:{count2}</h1>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:{contact}</h4>
            </div>
        );
    }
}

export default UserClass;