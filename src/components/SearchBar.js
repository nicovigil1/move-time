import React from 'react'

export default class SearchBar extends React.Component {
  render() {
    return(
      <div>
        <input style={styleSearch} id="search-bar" type="text"/>
        <input style={styleSubmit} onClick={this.props.getSearch} type="submit"></input>
      </div>
    )
  }
}

const styleSearch = {
  marginTop: "10px",
  borderRadius: "1em",
  outlineWidth: "0",
  padding: "4px"
}

const styleSubmit = {
  marginLeft: "1em",
  borderRadius: "1em",
  padding: ".5em"
}