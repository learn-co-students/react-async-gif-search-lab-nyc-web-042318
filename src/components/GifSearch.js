import React from 'react';

class GifSearch extends React.Component {
  constructor() {
    super()

    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.searchTerm)
  }

  render() {
    return(
      <form>
        <input type="text" onChange={this.handleChange}/>
        <button type="submit" onClick={this.handleClick}>Search for Gifs</button>
      </form>
    )
  }

}

export default GifSearch
