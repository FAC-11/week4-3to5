
const path = require('path');
const fs = require('fs');
const searchFunction = function(file, query, number, callback) {
  const fileSplit = file.split('/');
  const filePath = path.join(__dirname, '..', ...fileSplit);
  fs.readFile(filePath, (error, fileResult) => {
      const fileString = fileResult.toString();
      //below regex searches for any word following the entered string
      const regEx = new RegExp(`\b(${query})\w*`, 'gi');
      // match takes reg expression and pulls out all the matches from the stringified text file
      const pokeMatches = fileString.match(regEx);
      const pokeTenMatches = pokeMatches ? pokeMatches.slice(0, number) : '';
      callback(null, JSON.stringify({
        pokeTenMatches
      }))
    }
  });
};

module.exports = searchFunction;
