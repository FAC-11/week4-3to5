const path = require('path');
const fs = require('fs');


const search = require('./search.js');

const index = function (request, response) {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  response.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile(filePath, function (error, file) {
    if (error) {
      console.log(error);
      return;
    }
    response.end(file);
  }
)
};
const query = function (request, response, filePath) {

};
const assets = function (request, response, filePath) {

};

module.exports = {
  index,
  query,
  assets,
};
