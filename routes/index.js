var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_walking_skeleton');
var cat = mongoose.model('Cat', {name:string});





router.get('/', function(request, response){
  console.log('Here is a console log');
  response.send('Hello World');
});

module.exports = router;
