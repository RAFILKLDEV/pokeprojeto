import './PokemonCard.scss'
import React from "react";
import PokeBar from "../PokeBar/PokeBar";
import { colors, bars } from "../../constants.js"


const PokemonCard = ({ pokecards }) => {
    if (!pokecards?.types) return <div>loading...</div>;

    const makeStops = (colors) => colors.map(it => `${it} 50%`).join(', ');
    const makeGradient = (colors) => `linear-gradient(75deg, ${makeStops(colors)})`;


    const getBackground = function() {
        const [type1, type2] = pokecards?.types?.map(it => it.type); 
        let background = colors.find(it => it.key === type1.name).label;
        
        if (type2) {
            const typeKeys = [type1.name, type2.name];
            const typeColors = colors
                .filter(it => typeKeys.indexOf(it.key) >= 0)
                .map(it => it.label);
                
            background = makeGradient(typeColors);
        }
        return background;
    }


    return(
    <div className="pokemon-card" style={{background: getBackground() }}>
        <div className="id">#{pokecards.id}</div>
        <div className="title">{pokecards.name}</div>
        <img alt={pokecards.name} src={pokecards.sprites?.front_default} ></img>
        <div className="types">{ pokecards?.types?.map(it => it?.type?.name).join(" | ") }</div>
        <div className='bars'>
            { bars.map(stat => {
                return <PokeBar key={stat.key} props={pokecards} stat={stat} />
            }) }
        </div>
    </div>
    )
}

export default PokemonCard