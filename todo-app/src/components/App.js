import React from "react"
import H1 from "./H1"
import TodoItem from "./TodoItem"

function App(){
    return(
        <div>
            <H1 />
            <TodoItem 
                item="Eggs"
                description="Two dozen eggs."
            />
            <TodoItem 
                item="Milk"
                description="Half gallon of milk."
            />
            <TodoItem 
                item="Cereal"
                description="Lucky Charms."            
            />
            <TodoItem 
                 item="Gatorade"
                 description="Red"           
            />
        </div>
    )
}


export default App