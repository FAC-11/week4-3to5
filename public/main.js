
const domInput = document.getElementsByID('search_input');
const searchRequest = (function() {
  let oldValue = '';
   return function(newValue) {
     if(newValue !== oldValue) {
       pokeRequest('/search?q=' + newValue, domCallback);
     } else {
       domCallback(null, '');
     }
     oldValue = newValue;
   }

})();


const searchTerm = (function() {
  let checkSymbols = function(string) {
    return string.match(/[^a-z-2]/gi);
  }
  return function(inputText, callback) {
    if(inputText && !checkSymbols(inputText)) {
      callback(inputText);
    } else {
      callback();
    }
  }
})();

domInput.addEventListener('keyup', function(event) {
  searchTerm(event.target.value, searchRequest);
})

// (function() {
//   var results = ['pikachu', 'coffin', 'jigglypuff', 'squirtle', 'ekans'];
//   var optionDrops = document.getElementsByClassName('option');
//
//   Array.prototype.forEach.call(optionDrops, function(optionDrop, index) {
//     optionDrop.textContent = results[index];
//   });
// })();
