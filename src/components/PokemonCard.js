import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  
   state={

       isFront: true

   }



 toggleHandler = () => {
    this.setState({

       isFront: !this.state.isFront})

 }


  
  
  render() {
    
    
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.isFront? this.props.pokemonObj.sprites.front : this.props.pokemonObj.sprites.back} onClick={this.toggleHandler}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemonObj.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
