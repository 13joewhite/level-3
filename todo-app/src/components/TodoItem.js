import React from "react"

function TodoItem(){
    return(
        <div>       
            <input type="checkbox"></input>
            <h3>Eggs</h3>
            <p>Two dozen eggs</p>
            
            <input type="checkbox"></input>
            <h3>Milk</h3>
            <p>Half gallon of milk</p>

            <input type="checkbox"></input>
            <h3>Cereal</h3>
            <p>Lucky Charms</p>

            <input type="checkbox"></input>
            <h3>Gatorade</h3>
            <p>The red flavor</p>
        </div>

    )
}

export default TodoItem