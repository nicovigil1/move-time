import React from 'react'

export default class Login extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let username = document.querySelector("#username")
    let password = document.querySelector("#password")
    fetch(`https://hidden-mountain-93492.herokuapp.com/api/v1/users?username=${username.value}&password=${password.value}`, {method: "POST"})
    .then(res => res.json())
    .then(res => this.props.setTheState({ currentUser: res }))
    .then(this.props.setTheState({ loggedIn: true }))
    .then(this.props.setTheState({ login: false }))
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" name="username"/>
        <label htmlFor="password">Password:</label>
        <input id="password" type="text" name="password"/>
        <button>Send data!</button>
      </form>
    )
  }
}