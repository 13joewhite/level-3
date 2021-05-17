import React from "react"

class Targets extends React.Component {

    render (){
        // map over the data so i can use it.
        return (
            <div className="targetBox">
                <img width="300" height="200" className="img" src={this.props.img} />
                <h2>Target:  {this.props.name}</h2>
            </div>
        )
    }
}

export default Targets