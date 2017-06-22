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
      startDate: "",
      endDate: ""
    };
  }

  handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchNYT(e) {
    let {topic, startDate, endDate} = this.state;
    let sDate = "";
    let eDate = "";
    e.preventDefault();

    /**
     * remove this
     */
    topic = topic || "water";
    /**
     * remove above line
     */
    
    let apiParams = {
      "api-key": API_KEY,
      q: ( topic )
    }

    if (startDate && endDate ) {
      sDate = startDate.replace(/-/g, '');
      // console.log("startDate", sDate);
      eDate = endDate.replace(/-/g, '');
      // console.log("endDate", eDate);
      apiParams.begin_date = sDate;
      apiParams.end_date = eDate;
    }

    if (topic && topic != "") {
      axios
        .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
          params: apiParams
        })
        .then(response => {
          // console.log(response.data.response.docs);
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
    } else {
      alert("Enter topic to search");
    }
  }

  render() {
    let { topic, startDate, endDate } = this.state;
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
                name="startDate"
                type="date"
                label="Start Date"
                placeholder="Enter start date"
                value={startDate}
                onChange={this.handleValueChange}
              />
              <FieldGroup
                className="text-center"
                name="endDate"
                type="date"
                label="End Date"
                placeholder="Enter end date"
                value={endDate}
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
