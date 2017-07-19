(function() {
  var results = ['pikachu', 'coffin', 'jigglypuff', 'squirtle', 'ekans'];
  var optionDrops = document.getElementsByClassName('option');

  Array.prototype.forEach.call(optionDrops, function(optionDrop, index) {
    optionDrop.textContent = results[index];
  });
})();
