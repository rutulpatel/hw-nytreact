import React, { Component } from "react";
import { Panel } from "react-bootstrap";
class SavedArticles extends Component {
  constructor(props) {
    super(props);
  }

  renderArticles = () => {
    console.log(this.props.savedArticles);
    if (this.props.savedArticles) {
      return this.props.savedArticles.map(article => {
        return (
          <Panel key={article._id} className="text-left">
            {article.title}
          </Panel>
        );
      });
    } else {
      return (<div>No saved articles found</div>);
    }
  };

  render() {
    return (
      <div className="container-fluid text-center">
        <Panel header="Saved Articles" bsStyle="info">
          {this.renderArticles()}
        </Panel>
      </div>
    );
  }
}

export default SavedArticles;
