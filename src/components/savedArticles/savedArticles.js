import React, { Component } from "react";
import { Panel, Col, Button } from "react-bootstrap";
class SavedArticles extends Component {
  constructor(props) {
    super(props);
  }

  removeArticle = (article_id) => {
    console.log(article_id);
    this.props.removeArticle(article_id);
  }

  renderArticles = () => {
    console.log(this.props.savedArticles);
    if (this.props.savedArticles) {
      return this.props.savedArticles.map(article => {
        return (
          <Panel key={article._id} className="show-grid text-left">
            <Col xs={10} bsSize="small">
              {article.title}
            </Col>
            <Col xs={2} bsSize="small">
              <Button
                bsSize="small"
                bsStyle="danger"
                onClick={() => this.removeArticle(article._id)}
              >
                Remove
              </Button>
            </Col>

          </Panel>
        );
      });
    } else {
      return <div>No saved articles found</div>;
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
