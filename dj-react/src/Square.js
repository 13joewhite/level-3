import React from "react"

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
    }
    render() {
        return(
            <div className={`squares ${this.props.color}`}>
                
            </div>
        )
    }
}

export default Square