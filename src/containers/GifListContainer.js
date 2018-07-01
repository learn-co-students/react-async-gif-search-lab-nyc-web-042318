import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      gifs: []
    }
  }

  onSubmit = (searchTerm) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`).then(resp => resp.json()).then(data => this.setState({gifs: data.data.slice(0,3)}))
  }

  render() {
    return(<div>
      <GifSearch onSubmit={this.onSubmit}/>
      <GifList gifs={this.state.gifs} />
      </div>)
  }

}

export default GifListContainer
