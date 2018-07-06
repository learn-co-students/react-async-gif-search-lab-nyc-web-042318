import React from 'react'

import NavBar from './NavBar'


// the App component should render out the GifListContainer component
import GifListContainer from '../containers/GifListContainer';
import GifSearch from './GifSearch';

class App extends React.Component {
  state= {
    searchValue: '',
    gifsObj: [],
    gifsObjcopy: []
  }

  componentDidMount () {
    fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g').then(r=> r.json())
    .then(gifs => this.setState ({
      gifsObj: gifs.data,
      gifsObjcopy: gifs.data
    }))
  }

  handleChange = (event) => {
    this.setState ({
      searchValue: event.target.value
    })

    // let thing = this.state.gifsObjcopy.filter( gif => gif.title.includes(event.target.value))

  }

  handleSubmit = (event) => {
    event.preventDefault();
    let thing = this.state.gifsObjcopy.filter( gif => gif.title.includes(this.state.searchValue))
    this.setState ({
      gifsObj: thing
    })
  }

  render() {
    return (
      <div>
        < NavBar color='black' title="Giphy Search" />
      < GifSearch search={this.state.searchValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        < GifListContainer gifs={this.state.gifsObj}/>
      </div>
    )
  }
}

export default App
