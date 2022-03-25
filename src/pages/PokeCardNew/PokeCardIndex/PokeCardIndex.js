import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import PokemonCard from '../../../components/PokemonCards/PokemonCard'
import Axios from "axios";
import UiContainer from "../../../components/UI/Container/Container";
import Header from "../../../components/Header/Header";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const Pages_PokeCardNew_PokeCardIndex = () => {
  const [pokecards, setPokecards] = useState([])
  const location = useLocation();
 

  useEffect( () => {
    const end = 'https://pokeapi.co/api/v2/pokemon/'
    const randomPoke = getRandomInt(1,898)
    const routeParams = new URLSearchParams(location.search);

    let result = end + (routeParams.get('id') || randomPoke)
    
    Axios.get(result)
      .then((response) => {
        setPokecards(response.data)
      })
  }, [])

  return(
        <UiContainer>
          <Header></Header>
          <PokemonCard pokecards={pokecards}></PokemonCard>  
        </UiContainer>
    )
}

export default Pages_PokeCardNew_PokeCardIndex