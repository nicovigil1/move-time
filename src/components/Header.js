import React from 'react'
import Favorites from './Favorites'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: null,
      displayFavorites: false
    }
  }
  login = () => {
    this.props.setTheState({login: true})
  }
  favorites = async () => {
    let currentUser = this.props.currentUser
    let response = await fetch(`https://hidden-mountain-93492.herokuapp.com/api/v1/favorites?id=${currentUser.id}`)
    let data = await response.json()
    this.setState({favorites: data})
    this.setState({displayFavorites: true})
    console.log(this.state.favorites)
  }
  render () {
    return(
      <div>
        <div style={styleHeader}>
          <div>Move Time</div>
          <div style={styleHeaderButtons}>
            { !this.props.loggedIn && <button className="nav-buttons" onClick={this.login}>Log In / Register</button>}
            { this.props.loggedIn && <button onClick={this.favorites} className="nav-buttons">Favorites</button>}
          </div>
        </div>
        {this.state.displayFavorites && < Favorites currentUser={this.props.currentUser} favorites={this.state.favorites} />}
      </div>
    )
  }
}

const styleHeader = {
  background: "#FFF9A5",
  paddingTop: "5px",
  paddingBottom: "5px"
}

const styleHeaderButtons = {
  display: "block"
}