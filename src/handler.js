const path = require('path');
const fs = require('fs');
const urlLink = require('url');
const search = require('./search.js');

const index = function(request, response, filePath) {
};

const query = function(request, response, filePath) {
  response.writeHead(200, 'Content-Type:application/javascript');
  const urlEndpoint = urlLink.parse(request.url, true);
  const searchTerm = urlEndpoint.query;
  searchFunction(filePath, searchTerm.q, 10, (error, res)=>{
    response.end(res);
  });
};

const assets = function(request, response, filePath) {
};

module.exports = {
  index,
  query,
  assets
};
