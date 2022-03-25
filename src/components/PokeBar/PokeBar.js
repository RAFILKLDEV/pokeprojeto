import React from "react";
import './PokeBar.scss'

const PokeBar = ({ props, stat }) => {
    const statData = props?.stats?.find(it => it?.stat?.name === stat.key)?.base_stat
    const bars = Math.ceil(statData / 17)
    return(
        <div className="PokeBar">
            <div className="Stats" dangerouslySetInnerHTML={{
                __html: stat.label
            }} />
            <div className="Stats">{statData}</div>
            { Array.from({ length: bars }).map((it, index) => {
                return <div key={`${it}-${index}`} className="Bar"> </div>
            })}
        
        </div>
    )
}
export default PokeBar