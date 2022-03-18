import React from 'react';
import './App.css';
import PokemonCard from './components/PokemonCards/PokemonCard';
import Testezim from './components/teste';

const App = () => {

  const promotion = {
    "id": 1,
    "name": "Raichu",
    "type": "Eletric",
    "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
  }

  return(
    <div 
    className="App"
    style={{
      maxWidth: 800,
      maxHeight: 800,
      margin: '30px auto',
    }}
    >
      <PokemonCard promotion={promotion}></PokemonCard>
    </div>

    
  )
}

export default App;
