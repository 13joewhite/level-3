import './App.css';
import React, { Component } from 'react'

export default class Example extends Component {
    constructor(){
        super()
        this.state = {
            input: '',
            inputs: []
        }
        this.inputChange = this.inputChange.bind(this)
        this.inputsButton = this.inputsButton.bind(this)
    }
    // Two functions
    inputChange(event){
      this.setState({
        [event.target.name]: event.target.value
      })
    }
    // 1. To change the input.

    inputsButton(event){
      event.preventDefault()
      this.setState((prevState) => {
        return {
          inputs: [...prevState.inputs, this.state.input],
          input: ""
        }
      })
    }
    // 2. button onclick to add to the inputs


    
    render() {
    // map this.state.inputs 
    console.log(this.state.inputs)
        return (
            <form className="myForm">
                <input 
                    type="text" 
                    value={this.state.input} 
                    name="input" 
                    placeholder="Name" 
                    onChange={this.inputChange} 
                />
                <br />
                <h3>{this.state.input}</h3>

                <ol>{this.state.inputs.map((input, index) => {
                  return <li key={index}>{input}</li>
                })}
                </ol>
                <button onClick={this.inputsButton}>Submit</button>
            </form>
        )
    }
}
