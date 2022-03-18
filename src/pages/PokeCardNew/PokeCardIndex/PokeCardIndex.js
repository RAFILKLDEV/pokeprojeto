import React, { useEffect, useState } from "react";
import PokemonCard from '../../../components/PokemonCards/PokemonCard'
import Axios from "axios";
import UiContainer from "../../../components/UI/Container/Container";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const Pages_PokeCardNew_PokeCardIndex = () => {
  const [pokecards, setPokecards] = useState([])
 

  useEffect( () => {
    console.log("renderizou")
    const end = 'https://pokeapi.co/api/v2/pokemon/'
    const randomPoke = getRandomInt(1,898)
    let result = (end + randomPoke)
    
    Axios.get(result)
      .then((response) => {
        setPokecards(response.data)
      })
  }, [])

  return(
        <UiContainer>
          <PokemonCard pokecards={pokecards}></PokemonCard>  
        </UiContainer>
    )
}

export default Pages_PokeCardNew_PokeCardIndex