import React from "react"

function TodoItem(props){
    return(
        <div>       
            <input type="checkbox"></input>
            <h3>{props.item}</h3>
            <p>{props.description}</p>
        </div>

    )
}

export default TodoItem