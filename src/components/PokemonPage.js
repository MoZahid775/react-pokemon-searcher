import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'





class PokemonPage extends React.Component {
  

  state={

      pokemon:[],
      searchFilter:""

  }




//FETCHING ALL POKEMON AND SETTING THEM TO STATE
  componentDidMount(){

    fetch("http://localhost:3000/pokemon")
  .then((r) => r.json())
  .then((pokemonsArray) => {this.setState({pokemon:pokemonsArray})})}


//ADD A POKEMON COMPONENET
  addPokemon= (pokemonObj) => {
    
    let addedPokemon = [...this.state.pokemon, pokemonObj]
    
    return this.setState({pokemon: addedPokemon})}



//POKEMON SEARCH FUNCTION TO CHANGE STATE OF FILTER

 searchFilter=(filtering)=>(
  this.setState({

    searchFilter: filtering 

  })
 )

  render() {
    let filteringValue = (this.state.searchFilter)
    let allPoke= this.state.pokemon
    console.log(filteringValue)


   let newArr = allPoke.filter((onePoke)=>{

     return onePoke.name.toLowerCase().includes(filteringValue.toLowerCase())
     })

    


    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search searchFilter={this.searchFilter} filterState={this.state.searchFilter}/>
        <br />
        <PokemonCollection allPokemon={newArr}/>
      </Container>
    )
  }
}

export default PokemonPage
