import React from 'react'
import { format } from 'path';

export default class SearchResults extends React.Component {
  addFavorite = () => {
    let currentUser = this.props.currentUser
    let favorite = this.props.results.data.attributes
    let formatFavorite = `user_id=${currentUser.id}&city_id=${favorite.id}&cyclists=${favorite.cyclists}&walkers=${favorite.walkers}&property_val=${favorite.property_val}&population=${favorite.population}`
    fetch(`https://hidden-mountain-93492.herokuapp.com/api/v1/favorites?${formatFavorite}`, {method: "POST"})
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  render() {
    return( 
      <div>
        {this.props.currentUser && <button onClick={this.addFavorite}>Add favorite!</button>}
        {console.log(this.props.currentUser)}
        {console.log(this.props.results.data.attributes)}
        <p>population: {this.props.results.data.attributes.population}</p>
        <p>number of cyclists: {this.props.results.data.attributes.cyclists}</p>
        <p>number of walkers: {this.props.results.data.attributes.walkers}</p>
        <p>Average Property Value: {this.props.results.data.attributes.property_val}</p>
        <p>Average Property Value: {this.props.results.data.attributes.property_val}</p>
      </div>
    )
  }
}