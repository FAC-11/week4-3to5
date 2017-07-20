var test = require('tape');
var search = require("../src/search.js");

// test RegExp
test("regEx should return words with the entered start letters", function(t) {
  var testString = "james, minesh, dak, jen"
  var query = 'ja';
  var regEx = new RegExp('\\b(' + query + ')\\w*', 'gi');
  var expected = ['james'];
  var actual = testString.match(regEx);
  t.deepEqual(actual, expected, "entering 'ja' shoud return James")
  t.end()
});

  // testing that pokeTenMatches returns correct number
  test("pokeTenMatches should return the correct number of pokemon", function(t) {
    var testString = "james, james, james, james, james, jam, jam, jam"
    var query = 'ja';
    var expected = ['james', 'james'];
    var regEx = new RegExp('\\b(' + query + ')\\w*', 'gi');
    var actual = testString.match(regEx).slice(0,2);
    t.deepEqual(actual, expected, "entering 'ja' shoud return James")
    t.end()
  });
