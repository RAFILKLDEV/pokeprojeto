import React from "react";
import './PokeBar.scss'

const PokeBar = ({props}) => {

    return(
        <div className="PokeBar">
            <div className="Stats">{props.stats?.[0].stat.name}</div>
            <div className="Stats">{props.stats?.[0].base_stat}</div>
        </div>
    )
}
export default PokeBar