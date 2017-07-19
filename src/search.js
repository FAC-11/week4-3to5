const path = require('path');
const fs = require('fs');

const search = function(file, query, number, callback) {
  const fileSplit = file.split('/');
  const filePath = path.join(__dirname, '..', ...fileSplit);
  fs.readFile(filePath, (error, fileResult)=>{
    if (error) {
      response.writeHead(500, "Content-Type:text/html");
      callback;
    } else {
  const fileString = fileResult.toString();
  //below regex searches for any word following the entered string
  const regEx = RegExp('\b(' + string +')\w+','gi');
  // match takes reg expression and pulls out all the matches from the stringified text file
  const pokeMatches = fileString.match(regEx);
  const pokeTenMatches = pokeMatches.slice(0, number)
    }
  });


};

module.exports = search;
