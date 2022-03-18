import React from "react";
import './PokemonCard.css'

const PokemonCard = ({ pokecards }) => (
    <div className="pokemon-card">
        <h1 className="pokemon-card__titulo">{pokecards.name}</h1>
        <h2 className="pokemon-card__tipo"> </h2>
        <img className="pokemon-card__imagem" alt={""} src={""} ></img>
        <div className="pokemon-card__descricao">Sua longa cauda serve como base para se proteger de sua própria energia de alta tensão.</div>
        <button className="pokemon-card__botao">Capturar!</button>
    </div>
)

export default PokemonCard