const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 1337;

app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});