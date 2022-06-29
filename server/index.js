const express = require('express');
const app = express();
const port = 1337;
const fakeData = require('../database/fakeData.js');

app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/', (req, res) => {
  res.status(200).send({data: fakeData.slice((req.body.page - 1) * req.body.pageLimit, req.body.page * req.body.pageLimit)});
});

app.post('/create', (req, res) => {
  console.log(req.body.item);
});

app.post('/changePage', (req, res) => {
  console.log(fakeData.slice((req.body.page - 1) * req.body.pageLimit, req.body.page * req.body.pageLimit));
  res.status(200).send({data: fakeData.slice((req.body.page - 1) * req.body.pageLimit, req.body.page * req.body.pageLimit)});
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});