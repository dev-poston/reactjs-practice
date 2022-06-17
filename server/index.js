const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const API = require('../client/src/API');
const port = 1337;

app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  console.log(req.body.data);
});

app.post('/create', (req, res) => {
  console.log(req.body.item);
})

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});