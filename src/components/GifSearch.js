import React, { Component } from 'react';

class GifSearch extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text"  value={this.props.search} onChange={this.props.handleSearch}/>
                    <button type="submit"> Search! </button>
                </form>
            </div>
        );
    }
}

export default GifSearch;