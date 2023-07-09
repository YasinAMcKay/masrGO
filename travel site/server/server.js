const express = require('express');
const routes = require('./api/api');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  })
 
app.use('/api', routes);

app.listen(8080, function () {
  console.log('Listening to port 8080.');
});