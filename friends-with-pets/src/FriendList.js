import React from "react"
import friendsData from "./friendsData"
import Friend from "./Friend"
function FriendList(){
    const friendArr = friendsData.map(friend => <Friend key={friend.id} name={friend.name} age={friend.age} pets={friend.pets}/>)

    return (
        <div>
            {friendArr}
        </div>
    )
}

export default FriendList