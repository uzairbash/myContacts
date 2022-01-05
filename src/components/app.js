import React from "react";
import ReactDOM from "react-dom";
import Card from "./card";
import contacts from "../contactdetails";




function CreateCard(contact){
    return(
        <Card
                key= {contact.id}
                name= {contact.name}
                number= {contact.number}
                image= {contact.image}
                email= {contact.email}
                address= {contact.address}

            ></Card>

    );
}






function App()
{
    const imgAd= "https://th.bing.com/th/id/OIP.c5KXw-wPcnwyyBNayoXfFQHaHa?w=215&h=216&c=7&r=0&o=5&pid=1.7";
    return(
        <div>
            <div className="heading">
                <h1> My Contact List </h1>
             </div>

            {contacts.map(CreateCard)}


           {/* <Card
                name= {contacts[0].name}
                number= {contacts[0].number}
                image= {contacts[0].image}
                email= {contacts[0].email}
                address= {contacts[0].address}

            ></Card>

            <Card 
                name= {contacts[1].name}
                number= {contacts[1].number}
                image= {contacts[1].image}
                email= {contacts[1].email}
                address= {contacts[1].address}
            ></Card>

            <Card
                name= {contacts[2].name}
                number= {contacts[2].number}
                image= {contacts[2].image}
                email= {contacts[2].email}
                address= {contacts[2].address}
            ></Card> */}


        </div>
    );
}


export default App;