import React from "react";






function RightSide(props) {
    return(
        <img draggable="false" className="food-poster-current poster" src={props.slides[props.numberOfSlide]}/>
    )
}

export default RightSide