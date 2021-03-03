import React from "react"
import Square from "./Square"
import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        colors: ["white", "white", "white", "white"]
    }
    this.smallTimeDJ = this.smallTimeDJ.bind(this)
    this.partyDJ = this.partyDJ.bind(this)
    this.profDj1 = this.profDj1.bind(this)
    this.profDj2 = this.profDj2.bind(this)
    this.bigTime1 = this.bigTime1.bind(this)
    this.bigTime2 = this.bigTime2.bind(this)
    this.bigTime3 = this.bigTime3.bind(this)
    this.bigTime4 = this.bigTime4.bind(this)

}

smallTimeDJ() {
  this.setState((prevState) => {
      if(prevState.colors[0] === "white") {
        return  {
          colors: ["black", "black", "black", "black"]
        }
      } else {
        return {
          colors: ["white", "white", "white", "white"]
        }
      }
    }
  )
}


partyDJ(){
  this.setState((prevState) => {
      return {
        colors:  ["purple", "purple", prevState.colors[2], prevState.colors[3]]
      }
    }
  )
}

profDj1() {
  this.setState((prevState) => {
      return {
        colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
      }
    }
  )
}

profDj2() {
  this.setState((prevState) => {
    return {
      colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]
    }
    }
  )
}

bigTime1(){
  this.setState((prevState) => {
      return {
        colors:["green", prevState.colors[1], prevState.colors[2], prevState.colors[3]]
      }
    }
  )
}

bigTime2(){
  this.setState((prevState) => {
      return {
        colors:[prevState.colors[0], "orange", prevState.colors[2], prevState.colors[3]]
      }
    }
  )
}


bigTime3(){
  this.setState((prevState) => {
      return {
        colors:[prevState.colors[0], prevState.colors[1], "magenta", prevState.colors[3]]
      }
    }
  )
}

bigTime4(){
  this.setState((prevState) => {
      return {
        colors:[prevState.colors[0], prevState.colors[1], prevState.colors[2], "gold"]
      }
    }
  )
}

  render() {
      return (
        <div>
          <div className="squareContainer">
            <Square color={this.state.colors[0]}/>
            <Square color={this.state.colors[1]}/>
            <Square color={this.state.colors[2]}/>
            <Square color={this.state.colors[3]}/>          
          </div>
          <div className="buttonGrid">
            <button onClick={this.smallTimeDJ}>Small Time DJ</button>  
            <button onClick={this.partyDJ}>Party DJ</button>   
            <button onClick={this.profDj1}>Professional DJ 1</button>    
            <button onClick={this.profDj2}>Professional DJ 2</button> 
            <button onClick={this.bigTime1}>BigTime Top Left</button>
            <button onClick={this.bigTime2}>BigTime Top Right</button>
            <button onClick={this.bigTime3}>BigTime Bottom Left</button>
            <button onClick={this.bigTime4}>BigTime Bottom Right</button>            
          </div>


        </div>
      ) 
  }
}


export default App