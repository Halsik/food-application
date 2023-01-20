import React from "react";
import './Navbar.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';


function Navbar(props) {
    return(
        <div className="navbar-container">
            <div className="navbar-button">
                <Link to='/' className="navbar-back">
                    <p>Main Menu</p>
                    </Link>
            </div>
            <div className="navbar-section">
                <h1 className="navbar-header">{props.header}</h1>
            </div>
            <div className="navbar-logo">
                <img className="navbar-logo-image" src={logo}/>
                <h1 className="navbar-logo-text">Recepies App</h1>
            </div>

        </div>
    )
}

export default Navbar