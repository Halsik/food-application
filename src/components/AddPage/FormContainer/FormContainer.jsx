import React from "react";
import './FormContainer.css'
import logoImage from '../../images/logo.png'

function FormContainer() {
    return(
        <div className="form-container">
            <div className="form-container-header">
                <img src={logoImage}/>
                <h1 className="form-container-header-text">Recepies App</h1>
            </div>
            <div className="form-fields-container"></div>
        </div>
    )
}

export default FormContainer