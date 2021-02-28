import React from "react"
import Card from "./Card"
import vacationSpots from "./vacationSpots"

function App(){
    const vacationCards = vacationSpots.map(vacationSpot => <Card key={vacationSpot.id} imgUrl={vacationSpot.imgUrl} place={vacationSpot.place} price={vacationSpot.price} timeToGo={vacationSpot.timeToGo}/>)

    return (
        <div>
           {vacationCards}
        </div>
    )
}

export default App