import React, {useState} from "react";
import './Menu.css'
import FlipCard from "./Flipcard/Flip-card";

import Navbar from "./Navbar/Navbar";




function Menu(props) {

    const foodArray = props.type

const newFoodArray = foodArray.map(item => {
    return (
        <FlipCard 
        id={item.id}
        key={item.id}
        name={item.name}
        ingredients={item.ingredients}
        coverImage={item.img}
        />
        
    )
})





    return(
       <div  className="menu-container">
            <Navbar 
            header={props.header}/>
            <div className="menu-card-container">
                {newFoodArray}
            </div>
            <div className="buttons">

            </div>
            
       </div>
    )
}


export default Menu