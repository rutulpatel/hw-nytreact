import React, { Component } from "react";
import "react-bootstrap";
import Results from "./components/results/results";
import SavedArticles from "./components/savedArticles/savedArticles";
import Search from "./components/search/search";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      savedArticles: []
    };
  }

  saveSearchResults = articles => {
    this.setState({ searchResults: articles });
  };

  handleRequest = () => {
    axios.get("/api").then(response => {
      console.log(response.data);
    });
  };

  saveArticle = articleObj => {
    axios
      .post("/api/saved", articleObj)
      .then(response => {
        console.log(response);
        this.pullSavedArticles().bind(this);
      })
      .catch(err => {
        console.log(err);
      });
  };

  pullSavedArticles = () => {
    axios
      .get("/api/saved")
      .then(response => {
        console.log(response.data);
        this.setState({ savedArticles: response.data });        
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.pullSavedArticles();
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
        <Results
          searchResults={this.state.searchResults}
          selectedArticle={this.saveArticle}
        />
        <SavedArticles savedArticles={this.state.savedArticles} />
      </div>
    );
  }
}

export default App;
