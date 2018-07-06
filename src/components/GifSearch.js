import React from 'react';

class GifSearch extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Enter a Search Term:
            <input type="text" name="search" value={this.props.search} onChange={this.props.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}



export default GifSearch;
