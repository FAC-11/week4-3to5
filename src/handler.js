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
  },
);
};
const query = function (request, response, filePath) {

};
const assets = function (request, response, filePath) {
  const contentType = {
    css: 'text/css',
    html: 'text/html',
    js: 'application/javascript',
    png: 'image/png',
  };

  const assetUrl = request.url;
  const extension = assetUrl.split('.')[1];
  const assetFilePath = path.join(__dirname, '..', 'public', assetUrl);
  response.writeHead(200, { 'Content-Type': contentType[extension] });
  fs.readFile(assetFilePath, function (error, file) {
    if (error) {
      console.log(error);
      return;
    }
    response.end(file);
  });
};
module.exports = {
  index,
  query,
  assets,
};
