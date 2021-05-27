import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  
  
  state=({
       name: "",
         hp: "",
      frontUrl: "",
       backUrl: ""
  })
  
  
  inputHandler=(event)=>{
      this.setState({
           [event.target.name]: event.target.value
      })
  }

  //SUBMIT DATA FORM FROM THE FORM TO THE BACK END AND ALSO SEND UP IN THE INFO TO BE DISPLAYED ON THE FRONT
  handleSubmit=(event)=>{
    event.preventDefault()
    let data = {
         name: this.state.name,
         hp: this.state.hp,
         sprites:{
         frontUrl: this.state.frontUrl,
         backUrl: this.state.backUrl}
    }
    
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((pokemonObj) => this.props.addPokemon(pokemonObj))

      this.setState({        
          name: "",
            hp: "",
         frontUrl: "",
          backUrl: ""
      })





  }

    
  render() {
    
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.inputHandler} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.inputHandler} value={this.state.hp} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.inputHandler} value={this.state.frontUrl} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.inputHandler} value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
