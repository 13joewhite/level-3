import React from "react"
import './App.css';

class App extends React.Component {
  constructor() {
      super()
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phoneNum: "",
        favFood: "",
        selfInfo: "",
        nameBadges: []
      }
      this.handleChange = this.handleChange.bind(this)
      this.nameBadges = this.nameBadges.bind(this)
    }

    handleChange(event){
      const { name, value } = event.target

      this.setState({
        [name]: value
      })
    }

    nameBadges(event){
      event.preventDefault()
      const employee = {
        firstName: this.state.firstName === "" ? "" : this.state.firstName,
        lastName: this.state.lastName === "" ? "" : this.state.lastName,
        email: this.state.email === "" ? "" : this.state.email,
        placeOfBirth: this.state.placeOfBirth === "" ? "" : this.state.placeOfBirth,
        phoneNum: this.state.phoneNum === "" ? "" : this.state.phoneNum,
        favFood: this.state.favFood === "" ? "" : this.state.favFood,
        selfInfo: this.state.selfInfo === "" ? "" : this.state.selfInfo,
      }
      this.setState(prevState => {
        return {
          nameBadges: [...prevState.nameBadges, employee]
        }
      })
    }

    render() {
      return (
        <main>
          <form className="form">
            <div className="divs">
              <input 
                className="formItems"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder="First Name"
              />

              <input 
                  className="formItems"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  placeholder="Last Name"
                />            
            </div>

            <div className="divs">
              <input 
                  className="formItems"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email"
                />

              <input 
                  className="formItems"
                  name="placeOfBirth"
                  value={this.state.placeOfBirth}
                  onChange={this.handleChange}
                  placeholder="Place Of Birth"
                />         
            </div>

            <div className="divs">
              <input 
                  className="formItems"
                  name="phoneNum"
                  value={this.state.phoneNum}
                  onChange={this.handleChange}
                  placeholder="Phone Number"
                />

              <input 
                  className="formItems"
                  name="favFood"
                  value={this.state.favFood}
                  onChange={this.handleChange}
                  placeholder="Favorite Food"
                />
            </div>

            <textarea 
                className="infoText"
                placeholder="Tell us about yourself"
                name="selfInfo"
                value={this.state.selfInfo}
                onChange={this.handleChange}
            />

            <button 
              onClick={this.nameBadges}
            >Submit
            </button>

          </form>
          
        {this.state.nameBadges.map((badgeCard, index) => {
          return (
            <div 
              key={index}
              className="mainBadgeDiv"
            >
              <div className="badgeTitle">Badge:</div>

              <div className="inputBadgeDiv">
                <h2>Name: {badgeCard.firstName} {badgeCard.lastName}</h2>
                <h2>Phone: {badgeCard.phoneNum}</h2>
              </div>

              <div className="inputBadgeDiv">
                <h2>Place Of Birth: {badgeCard.placeOfBirth}</h2>
                <h2>Favortie Food: {badgeCard.favFood}</h2>
              </div>

              <div className="inputBadgeDiv">
                <h2>Email: {badgeCard.email}</h2>
              </div>
              
              <div 
                className="selfInfoBadge"
              >
                <textarea value={badgeCard.selfInfo}/>
              </div>
            </div>
          )
        })}
        </main>
    )  
  }
}

export default App;
