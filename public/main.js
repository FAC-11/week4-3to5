(function() {
  var results = ['pikachu', 'coffin', 'jigglypuff', 'squirtle', 'ekans'];
})();


// XHR request
var pokeInput = document.getElementById('js-pokeInput');
pokeInput.addEventListener('input', function(event) {
  var pokeLetters = event.target.value;
  var url = '/search?q=' + pokeLetters;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var results = JSON.parse(xhr.responseText);
      var optionDrops = document.getElementsByClassName('option');
      Array.prototype.forEach.call(optionDrops, function(optionDrop, index) {
        optionDrop.textContent = results[index];
      });
    }
  }
xhr.open('GET', url, true);
xhr.send();
});
