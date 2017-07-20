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
