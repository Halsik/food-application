import React, {useState} from "react";
import './Flip-card.css'
import Card from "./Card/Card";
import {CSSTransition} from 'react-transition-group'
import './flip-transition.css'




function FlipCard(props) {

    const [cardSide, setCardSide] = useState(true)

    return (
        <CSSTransition
        in={cardSide}
            timeout={300}
            classNames='grow'>
                
        <div className="flip-card-container">
            <h1 className="card-header">{props.name}</h1>
            <CSSTransition
            in={cardSide}
            timeout={300}
            classNames='flip'>
                <Card 
                id={props.id}
                coverImage={props.coverImage}
                ingredients={props.ingredients}
                
                onClick={() => {
                    setCardSide(prevCardSide => !prevCardSide)
                }}/>
                
            </CSSTransition>
        </div>
        </CSSTransition>
       
    )
}

export default FlipCard