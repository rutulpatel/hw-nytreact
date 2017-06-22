import React, { Component } from "react";
import "react-bootstrap";
import Results from './components/results/results';
import SavedArticles from './components/savedArticles/savedArticles';
import Search from './components/search/search';


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

  render() {
    return (
      <div className="App">
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
