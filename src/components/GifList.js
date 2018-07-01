import React from 'react';

const GifList = (props) => {
    return(
      <ul>
        {props.gifs.map(gif =>
        <li>
          <iframe src={gif.embed_url} title={gif.slug} />
        </li>)}
      </ul>
    )
}

export default GifList
