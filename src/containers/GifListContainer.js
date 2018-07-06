import React from 'react';
import GifList from '../components/GifList';

class GifListContainer extends React.Component {


render () {
  return (
    <GifList gifs={this.props.gifs}/>
  )
}






}



export default GifListContainer;
