import React, { Component } from "react";
import { Panel } from "react-bootstrap";
class SavedArticles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid text-center">
        <Panel header="Saved Articles" bsStyle="info">
          
        </Panel>
      </div>
    );
  }
}

export default SavedArticles;
