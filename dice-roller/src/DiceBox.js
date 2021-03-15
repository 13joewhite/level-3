import React from "react"
import "./DiceBox.css"

class DiceBox extends React.Component {
    constructor(){
        super()
        this.state = {
            num1: 1,
            num2: 1,
            num3: 1,
            num4: 1,
            num5: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }

    randomNumber() {
        return Math.floor(Math.random() * (7 - 1) + 1)
    }

    handleClick() {
        this.setState(() => {
            return { 
                num1: this.randomNumber(),
                num2: this.randomNumber(),
                num3: this.randomNumber(),
                num4: this.randomNumber(),
                num5: this.randomNumber(),
            }
        })
    }

    render() {
        return (
            <div className="button">
                <div className="dice">
                    <h1>{this.state.num1}</h1>
                    <h1>{this.state.num2}</h1>
                    <h1>{this.state.num3}</h1>
                    <h1>{this.state.num4}</h1>
                    <h1>{this.state.num5}</h1>
                    <button onClick={this.handleClick}>Roll The Dice</button>
                </div>
            </div>
        )
    }
}

export default DiceBox
