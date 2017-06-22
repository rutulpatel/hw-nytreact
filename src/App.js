import React, { Component } from "react";
import "react-bootstrap";
import Results from './components/results/results';
import SavedArticles from './components/savedArticles/savedArticles';
import Search from './components/search/search';
import axios from 'axios';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: []
    }
  }

  saveSearchResults = (articles) => {
    this.setState({searchResults: articles});
  }

  handleRequest = () => {
    axios.get('/api').then((response)=>{
      console.log(response.data);
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleRequest}>Test</button>
        <div className="page-header text-center">
          <h1 className="text-underline">
            <u>New York Time Article Scrubber</u>
          </h1>
          <h4>Search articles and saved the ones that interests you.</h4>
        </div>
        <Search searchResults={this.saveSearchResults} />
        <Results searchResults={this.state.searchResults} />
        <SavedArticles />
      </div>
    );
  }
}

export default App;
