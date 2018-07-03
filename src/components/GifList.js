import React, { Component } from 'react';

class GifList extends Component {
    render() {
        let list 
        if(this.props.gifs) list = this.props.gifs.map(gif => <img src={gif.images.fixed_width.url} key={gif.id} className="ui fluid spaced image"    alt="gifs"/>)
        console.log(list)
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default GifList;