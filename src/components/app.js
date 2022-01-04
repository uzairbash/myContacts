import React from "react";
import ReactDOM from "react-dom";
import Card from "./card";
import ContactDetails from "../contactdetails";


function App()
{
    const imgAd= "https://th.bing.com/th/id/OIP.c5KXw-wPcnwyyBNayoXfFQHaHa?w=215&h=216&c=7&r=0&o=5&pid=1.7";
    return(
        <div>
            <div className="heading">
                <h1> My Contact List </h1>
             </div>


            <Card
                name= {ContactDetails[0].name}
                number= {ContactDetails[0].number}
                image= {ContactDetails[0].image}
                email= {ContactDetails[0].email}
                address= {ContactDetails[0].address}

            ></Card>

            <Card 
                name= {ContactDetails[1].name}
                number= {ContactDetails[1].number}
                image= {ContactDetails[1].image}
                email= {ContactDetails[1].email}
                address= {ContactDetails[1].address}
            ></Card>

            <Card
                name= {ContactDetails[2].name}
                number= {ContactDetails[2].number}
                image= {ContactDetails[2].image}
                email= {ContactDetails[2].email}
                address= {ContactDetails[2].address}
            ></Card>


        </div>
    );
}


export default App;