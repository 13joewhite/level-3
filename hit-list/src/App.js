import React from 'react';
import './App.css';
import Targets from './Targets'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
        targetArr: [] 
    }
}

componentDidMount() {
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")            
        .then(response => response.json())
        .then(data => {
            this.setState({
                targetArr: data
            })
        })
}

render(){
  const newTargetArr = this.state.targetArr.map((target,index) => {
    return <Targets key={index} name={target.name} img={target.image}/>
  })  
  return (
    <div className="App">
      {newTargetArr}
    </div>
  );
}
}


 


export default App;
