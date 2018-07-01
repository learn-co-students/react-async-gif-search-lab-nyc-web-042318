import React from 'react';

const GifList = (props) => {
  return (
    <ul>
      {props.gifs.map((gif) => {
        return <li><iframe src={gif.embed_url}/></li>
      })}
    </ul>
  )
}

export default GifList;
