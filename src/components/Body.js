import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import Header from './Header'
import Login from './Login'

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getSearch: this.getSearch,
      search: null,
      displayResults: false,
      results: null,
      login: false, 
      currentUser: null,
      loggedIn: false
    }
  }

  getSearch = async () => {
    let searchValue = document.querySelector("#search-bar").value
    let response = await fetch(`https://hidden-mountain-93492.herokuapp.com/api/v1/search?city=${searchValue}`)
    let data = await response.json()
    this.setState({results: data})
    this.setState({displayResults: true})
    console.log(this.state.results)
  }

  setTheState = (properties) => {
    this.setState(properties)
  }

  render() {
  return(
    <div>
      < Header currentUser={this.state.currentUser} loggedIn={this.state.loggedIn} setTheState={this.setTheState}/>
      <div>
        {!this.state.login &&  < SearchBar getSearch={this.getSearch}/> }
        {this.state.displayResults && < SearchResults currentUser={this.state.currentUser} results={this.state.results} />}
        {this.state.login && < Login setTheState={this.setTheState} /> }
      </div>
    </div>
    )
  }
}

// const styleBody = {
//   display: "flex", 
//   flexDirection: "column",
// }