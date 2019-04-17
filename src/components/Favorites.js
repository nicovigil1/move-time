import React from 'react'

export default class Body extends React.Component {
  deleteFavorite = () => {
    let currentUser = this.props.currentUser
    fetch(`https://hidden-mountain-93492.herokuapp.com/api/v1/favorites?user_id=${currentUser.id}`, {method: "DELETE"})
      .then(res => {res.json()})
      .then(res => console.log(res))
  }
  render() {
    return (
      this.props.favorites.data.map(favorite => {
        return <div>
          {console.log(favorite)}
          <button onClick={this.deleteFavorite}>Delete Favorite</button>
          <p>city: {favorite.attributes.city}</p>
          <p>population: {favorite.attributes.population} people</p>
          <p>number of cyclists: {favorite.attributes.cyclists} people</p>
          <p>number of walkers: {favorite.attributes.walkers} people</p>
          <p>Average Property Value: $ {favorite.attributes.property_val}</p>
        </div>
      })
    )
  }
}