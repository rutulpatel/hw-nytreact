import React, { Component } from "react";
import "react-bootstrap";
import Results from './components/results/results';
import SavedArticles from './components/savedArticles/savedArticles';
import Search from './components/search/search';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-header text-center">
          <h1 className="text-underline">
            <u>New York Time Article Scrubber</u>
          </h1>
          <h4>Search articles and saved the ones that interests you.</h4>
        </div>

        <Search />
        <Results />
        <SavedArticles />
      </div>
    );
  }
}

export default App;
