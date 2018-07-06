import React from 'react';


class GifList extends React.Component {
  render() {


    let thing = this.props.gifs.map( best => {
        return <li>{best.title} <br/>
          <img src={best.images.original.url}/></li>
      })



    return (
      <ul>{thing}</ul>
    )
  }
}



export default GifList;
