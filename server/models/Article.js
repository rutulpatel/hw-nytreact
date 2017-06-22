var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  nytid: {
    type: String,
    required: true
  }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
