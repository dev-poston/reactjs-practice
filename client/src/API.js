const axios = require("axios");

module.exports = {
  readAll: (callback) => {
    axios('/')
      .then(data => {
        console.log('AXIOS GET: ', data);
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
  }
}