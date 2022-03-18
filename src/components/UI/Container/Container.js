import React from "react";
import './Container.css'

const UiContainer = ({ children }) => {
    return(
    <div className="ui-container">
      {children}
    </div>
    )
}

export default UiContainer