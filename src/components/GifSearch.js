import React from 'react'

class GifSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <form value = {this.state.term} onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.term} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default GifSearch;
