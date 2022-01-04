import React from "react";
import ReactDOM from "react-dom";
import Avatar from "./avatat";

function Card(props){
    return(
        <div className="container">
            <div className="info">
                <h1>{props.name}</h1>
                <p>{props.number}</p>
            </div>
           <div className="innerContainer">
                <div className="info2">

                <p>Email: {props.email}</p>
                <p>Address: {props.address}</p>
                </div>

                <div className="img">
                    <Avatar image= {props.image}></Avatar>
                </div>
           </div>
        </div>
    );
}

export default Card;