const path = require('path');
const fs = require('fs');
const urlLink = require('url');
const search = require('./search.js');

const query = function(request, response, filePath) {
  response.writeHead(200, {'Content-Type': 'application/javascript'});
  const urlEndpoint = urlLink.parse(request.url, true);
  const searchTerm = urlEndpoint.query;
  search(filePath, searchTerm.q, 10, (error, res) => {
    response.end(res);
  });
};

const index = function(request, response) {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.readFile(filePath, function(error, file) {
    if (error) {
      console.log(error);
      return;
    }
    response.end(file);
  }
);
};

const assets = function(request, response, filePath) {
  const contentType = {
    css: 'text/css',
    html: 'text/html',
    js: 'application/javascript',
    png: 'image/png',
    ico: 'icon/x-image',
    mp3: 'audio/mpeg'
  };

  const assetUrl = request.url;
  const extension = assetUrl.split('.')[1];
  const assetFilePath = path.join(__dirname, '..', 'public', assetUrl);
  console.log(extension);
  response.writeHead(200, {
    'Content-Type': contentType[extension]
  });
  fs.readFile(assetFilePath, function(error, file) {
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
