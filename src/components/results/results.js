import React, { Component } from "react";
import { Panel, Grid, Row, Col, Button } from "react-bootstrap";

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
        searchResults: [
            {
                title: "Article title 1",
                date: "07-20-17",
                url: "www.google1.com"
            },
            {
                title: "Article title 2",
                date: "08-20-17",
                url: "www.google2.com"
            },
            {
                title: "Article title 3",
                date: "09-20-17",
                url: "www.google3.com"
            }
        ]
    };
  }

  articleClicked = (article) => {
    alert(article);
  }

  renderResults() {
      return this.state.searchResults.map(
          (article) => {
            return (
            <Panel className="show-grid text-left" key={article.date} onClick={() => this.articleClicked(article)}>
              <Col xs={10} bsSize="small">
                {article.title}
              </Col>
              <Col xs={2}>
                <Button bsSize="small" bsStyle="primary">
                  Save
                </Button>
              </Col>
            </Panel>
            );
          }
      );
  }

  render() {
    return (
      <div className="container-fluid text-center">
        <Panel header="Results" bsStyle="info">
          <Grid>
            {this.renderResults()}
          </Grid>
        </Panel>
      </div>
    );
  }
}

export default Results;
