const pokeRequest = function(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var results = JSON.parse(xhr.responseText);
      callback(null,results);
      };
    }

  xhr.open('GET', url, true);
  xhr.send();
}

const domInput = document.getElementById('js-pokeInput');
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
