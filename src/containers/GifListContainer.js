import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs : []
    }
  }

  componentDidMount() {
    this.fetchGifs('coding')
  }

  fetchGifs = (term) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then((gifs) => {this.setState({
      gifs: gifs.data.slice(0, 3)}
    )})
  }

  handleSubmit = (term) => {
    this.fetchGifs(term);
  }

  render() {
    console.log(this.state.gifs)
    return (
      <div>
        <GifSearch onSubmit = {this.handleSubmit} />
        <GifList gifs = {this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer;
