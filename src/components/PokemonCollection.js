import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  
  //CONVERTING AN ARRAY OF OBJECTS POKEMON TO ARRAY OF COMPONENTS FOR POKEMON
  //this was not working as an assigned variable
  
  
  render() {
   let pokemonArComp = this.props.allPokemon.map(pokemonObj=> {return <PokemonCard key={pokemonObj.id} pokemonObj={pokemonObj}/>})
    
    

    return (
      <Card.Group itemsPerRow={6}>
        
       {pokemonArComp}
      </Card.Group>
    )
  }
}

export default PokemonCollection
