var express = require("express");
var router = express.Router();
var request = require("request");

// mongoose models
var Article = require("../models/Article");
var Note = require("../models/Note");

router.get('/api', function(req, res){
  res.json('It worked, whaattt!!!!')
})

router.get('/*', function(){
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
})

module.exports = router;