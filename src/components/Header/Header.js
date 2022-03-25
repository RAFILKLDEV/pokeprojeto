import React from "react";
import './Header.scss'
import { Link } from "react-router-dom";

const Header = ({ props }) => {

    return(
        <div className="Header">
            
            
            <button to="/create" className="buttoncenter"><Link to="/">Random</Link></button>
            <button className="buttoncenter"><Link to="/create">Pokedex</Link></button>
            <button className="buttoncenter"><Link to="/create">Account</Link></button>
        </div>
    )
}
export default Header