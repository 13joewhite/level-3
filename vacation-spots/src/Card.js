import React from "react"
import "./Card.css"

function Card(props){
    const betterDiv = {
        backgroundColor: "#EFE1CE",
        padding: "0%",
        margin: "0%"
    }
    const style = {
        border: 90, 
        border: "solid",
        borderColor: "#FDAC53",
        backgroundColor: "#FF6F61",
        width: 300,
        height: 350,
        padding: 50,
        margin: 20
    }
    const style1 = {
        position: "relative",
        left: "35%",
        bottom: "450px",
        border: 10,
        backgroundColor: "#FF6F61",
        width: 600,
        border: 90, 
        border: "solid",
        borderColor: "#FDAC53",
        padding: 90,
        margin: 20
    }
    const style2 = {
        position: "relative",
        left: "35%",
        bottom: "450px",
        border: 10,
        backgroundColor: "#FF6F61",
        width: 300,
        border: 90, 
        border: "solid",
        borderColor: "#FDAC53",
        padding: 30,
        margin: 20
    }
    const style3 = {
        position: "relative",
        left: "57%",
        bottom: "567px",
        border: 10,
        backgroundColor: "#FF6F61",
        width: 300,
        border: 90, 
        border: "solid",
        borderColor: "#FDAC53",
        padding: 30,
        margin: 20
    }
    return(
        <div style={betterDiv}>
            <img src={props.imgUrl} style={style}></img>
            <h1 style={style1}>Place: {props.place}</h1> 
            <h2 style={style2}>Price: {props.price}</h2>
            <h2 style={style3}>When: {props.timeToGo}</h2>
        </div>
    )
}

export default Card