var express = require("express");
var router = express.Router();
var request = require("request");

// mongoose models
var Article = require("../models/Article");
var Note = require("../models/Note");

router.get('/', function(req, res){
  res.json('It worked, whaattt!!!!')
});

router.get('/saved', function(req, res) {
  Article.find({}, function(err, doc) {
    if(err) {
      console.log(err);
    } else {
      console.log(doc);
      res.json(doc);
    }
  });
});

// POST METHODS
router.post("/saved", function(req, res) {
  console.log(req.body);
  //save data into database
  var entry = Article(req.body);

  entry.save(function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      console.log(doc);
      res.send("saved");
    }
  });
});

router.post("/addnote", function(req, res) {
  var note = {};
  console.log(req.body);
  note.title = req.body.title;
  note.body = req.body.body;
  note.articleId = req.body.articleId;
  var comment = Note(note);

  comment.save(function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      console.log(doc);
    //   res.render("partials/modalnotes", {notes: doc, articleId: req.body.articleId});
    res.json(doc);
    }
  });
});


module.exports = router;