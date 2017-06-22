import React, { Component } from "react";
import {
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button
} from "react-bootstrap";
import axios from "axios";

const API_KEY = "daa03b61d31342fe81e712de72412b28";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: "",
      startYear: "",
      endYear: ""
    };
  }

  handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state);
    });
  };

  searchNYT(e) {
    e.preventDefault();
    axios
      .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
        params: {
          "api-key": API_KEY,
          q: "water",
          begin_date: "20150101",
          end_date: "20170101"
        }
      })
      .then(response => {
        console.log(response.data.response.docs);        
        let articles = response.data.response.docs.map(article => {
          let obj = {};
          obj.id = article._id;
          obj.title = article.snippet;
          obj.date = article.pub_date;
          obj.link = article.web_url;
          return obj;
        });
        this.props.searchResults(articles);
        console.log(articles);
      })
      .catch(err => console.log(err));
  }

  render() {
    let { topic, startYear, endYear } = this.state;
    return (
      <div className="container-fluid  text-center">
        <Panel header="Search" bsStyle="info">
          <div className="conatiner">
            <Form>
              <FieldGroup
                className="text-center"
                name="topic"
                type="text"
                label="Topic"
                placeholder="Enter search topic"
                value={topic}
                onChange={this.handleValueChange}
              />
              <FieldGroup
                className="text-center"
                name="startYear"
                type="text"
                label="Start Year"
                placeholder="Enter start year"
                value={startYear}
                onChange={this.handleValueChange}
              />
              <FieldGroup
                className="text-center"
                name="endYear"
                type="text"
                label="End Year"
                placeholder="Enter end year"
                value={endYear}
                onChange={this.handleValueChange}
              />
              <Button
                type="submit"
                bsSize="large"
                onClick={this.searchNYT.bind(this)}
              >
                Search
              </Button>
            </Form>
          </div>
        </Panel>
      </div>
    );
  }
}

export default Search;
