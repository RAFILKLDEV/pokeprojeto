import React from "react";
import PokeBar from "../PokeBar/PokeBar";
import './PokemonCard.scss'

// const colors = [
//     normal = "#A8A878",
//     fire = "#F08030",
//     fighting = "#C03028",
//     water = "#6890F0",
//     flying = "#A890F0",
//     grass = "#78C850",
//     poison = "#A040A0",
//     eletric = "#F8D030",
//     ground = "#E0C068",
//     psychic = "#F85888",
//     rock = "#B8A038",
//     ice = "#98D8D8",
//     bug = "#A8B820",
//     dragon = "#7038F8",
//     ghost = "#705898",
//     dark = "#705848",
//     steel = "#B8B8D0",
//     fairy = "#EE99AC"
// ]

const PokemonCard = ({ pokecards }) => {
//     const [pokecards, setPokecards] = useState([])
 
//   useEffect( () => {
//     console.log("renderizou")
//     const end = 'https://pokeapi.co/api/v2/pokemon/'
//     const randomPoke = getRandomInt(1,898)
//     let result = (end + randomPoke)
    
//   }, [])

    return(
    <div className="pokemon-card">
        <div className="id">#{pokecards.id}</div>
        <div className="title">{pokecards.name}</div>
        <img alt={pokecards.name} src={pokecards.sprites?.front_default} ></img>
        <div className="types">
            { pokecards.types?.map( (valor, it) => <div key={pokecards.name + it}>{ valor?.type.name }</div>) }

        </div>
        <div>
            <PokeBar props={pokecards} > </PokeBar>
        </div>
        <button>Capturar!</button>
    </div>
    )
}

export default PokemonCard