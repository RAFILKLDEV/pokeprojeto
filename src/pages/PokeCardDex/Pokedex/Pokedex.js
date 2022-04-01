import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import PokemonCard from '../../../components/PokemonCards/PokemonCard'
import Axios from "axios";
import UiContainer from "../../../components/UI/Container/Container";
import Header from "../../../components/Header/Header";
import "./Pokedex.scss"

const PokeCardDex_Pokedex = () => {
    const [pokecards, setPokecards] = useState([])
    const location = useLocation();

    useEffect( () => {
        const end = 'https://pokeapi.co/api/v2/pokemon/'
        const Pokes = 898
        const routeParams = new URLSearchParams(location.search);

        for (let index = 1; index <= 30; index++) { 
            let Cards = end + index
        
            Axios.get(Cards)
                .then((response) => {
                    setPokecards(currentState => currentState.concat(response.data).sort((a, b) => a.id - b.id))
                })
        }

    }, [])    
    
    return(
        <div className="Pokedex">
                <Header></Header>
                    <div className="Pokedex__Container">
                        {pokecards.map((it) => <PokemonCard key={it.id} pokecards={it}></PokemonCard>)}
                        </div>
                    {/* <PokemonCard pokecards={pokedex}></PokemonCard> */}
        </div>
    )
}

export default PokeCardDex_Pokedex