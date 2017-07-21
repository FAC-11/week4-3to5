const domCallback = function(error, response) {
  if(error) {
    console.log(error);
  }
  if(response.pokeTenMatches) {
  const resultsDom = document.getElementById('search_bar');
  resultsDom.innerHTML = '';
  response.pokeTenMatches.forEach(function(pokeName) {
    const option = document.createElement('option');
    option.value = pokeName;
    resultsDom.appendChild(option);
  })

  }
}

var insertPokeInfo = function(err, response) {
  var imageDrop = document.getElementById('js-pokeImage');
  var imageElt = document.createElement('img');
  imageElt.src = response.sprites.front_default;
  imageElt.classList.add("pokeImage");
  imageElt.alt = response.name;
  if (imageDrop.firstChild) {
    imageDrop.replaceChild(imageElt, imageDrop.firstChild);
  }
  else {
    imageDrop.appendChild(imageElt);
  }
  console.log(response);
}

var form = document.getElementById('js-pokeForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var url = 'http://pokeapi.co/api/v2/pokemon/' + domInput.value.toLowerCase();
  pokeRequest(url, insertPokeInfo);
});
