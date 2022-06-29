const axios = require("axios");

module.exports = {
  readAll: (items, callback) => {
    axios.post('/', items)
      .then(data => {
        console.log('AXIOS GET: ', data);
        callback(null, data.data);
      })
      .catch(err => {
        console.log('AXIOS ERROR: ', err);
      });
  },
  readOne: (item, callback) => {
    axios.post('/search', item)
      .then(data => {
        console.log('AXIOS POST DATA: ', data);
      })
      .catch(err => {
        console.log('AXIOS POST ERROR: ', err);
      });
  },
  create: (item, callback) => {
    axios.post('/create', item)
      .then(data => {
        console.log('AXIOS CREATE ITEM: ', data);
        callback(null, data);
      })
      .catch(err => {
        console.log('AXIOS CREATE ERROR: ', err);
      });
  },
  changePage: (items, callback) => {
    axios.post('/changePage', items)
      .then(data => {
        console.log('AXIOS PAGE DATA', data);
        callback(null, data.data)
      })
      .catch(err => {
        console.log('AXIOS PAGE ERROR: ', err);
      });
  }
}