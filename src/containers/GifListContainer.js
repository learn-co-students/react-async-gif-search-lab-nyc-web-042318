import React, { Component } from 'react';
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch" 


const URL = "http://api.giphy.com/v1/gifs/search?q=";
const KEY ="&api_key=dc6zaTOxFJmzC&rating=g"


class GifListContainer extends Component {
    state = {
        gifs: [],
        searchTerm: "ok"
    }

    componentDidMount(){
        this.fetchFn().then(d => {
            this.setState({gifs: d.data.slice(0,5)})
        })
    }

    fetchFn(){
        let url = URL + this.state.searchTerm +KEY
        return fetch(url).then(j => j.json())
    }

    handleSearch = (event) => {
        this.setState({searchTerm: event.target.value}, ()=> console.log(this.state.searchTerm))
    }

    handleSubmit =(event) =>{
        event.preventDefault();
        this.fetchFn().then(d => {
            this.setState({gifs: d.data.slice(0,5)})
        })
    }

    render() {
        return (
            <div>
                <GifSearch search ={this.state.searchTerm} 
                handleSearch={this.handleSearch}
                handleSubmit={this.handleSubmit}
                />

                <GifList gifs={this.state.gifs}/>
            </div>
        );
    }
}

export default GifListContainer;