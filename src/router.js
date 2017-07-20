const handler = require('./handler');

const router = function (request, response) {
  const url = request.url;
  if (url === '/') {
        // This moved to the handlers
    handler.index(request, response);
  } else if (url.indexOf('/search') !== -1) {
    handler.query(request, response, 'data/pokemon.txt');
  } else {
    handler.assets(request, response);
  }
};

module.exports = router;
