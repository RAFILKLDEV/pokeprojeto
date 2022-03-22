import React from "react";
import './PokemonCard.scss'

const PokemonCard = ({ pokecards }) => (
    <div className="pokemon-card">
        <img alt={pokecards.name} src={pokecards.sprites?.front_default} ></img>
        <div className="id">#{pokecards.id}</div>
        <div className="title">{pokecards.name}</div>
        <div className="types">
            { pokecards.types?.map( (valor, it) => <div key={pokecards.name + it}>{ valor?.type.name }</div>) }
        </div>
        <button>Capturar!</button>
    </div>
)

export default PokemonCard