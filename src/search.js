const path = require('path');
const fs = require('fs');

const findMatches = function(searchTerm, data, number){
  //below regex searches for any word following the entered string
  const regEx = new RegExp('\\b(' + searchTerm + ')\\w*', 'gi');
  // match takes reg expression and pulls out all the matches from the stringified text file
  const pokeMatches = data.match(regEx);
  return pokeMatches ? pokeMatches.slice(0, number) : '';
};

const searchFunction = function(file, query, number, callback) {
  const fileSplit = file.split('/');
  const filePath = path.join(__dirname, '..', ...fileSplit);
  fs.readFile(filePath, (error, fileResult) => {
    if (error) {
      console.log(error);
      return;
    } 

      callback(null, JSON.stringify(findMatches(query, fileResult, number)));
    });
  };

module.exports = {
  searchFunction,
  findMatches
}
