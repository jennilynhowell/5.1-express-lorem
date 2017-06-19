const express = require('express');
const app = express();
let loremIpsum = require('lorem-ipsum'), output = loremIpsum();

app.get('/lorem', function(req, res){
  res.send(loremIpsum({count: 3, units: 'paragraphs', paragraphLowerBound: 3, format: 'html'}));
});


app.get('/lorem/:paragraphs', function(req, res){
  res.send(loremIpsum({count: req.params.paragraphs, units: 'paragraphs', paragraphLowerBound: 3, format: 'html'}));
});

app.listen(3000, function(){
  console.log('Listening for connections');
});
