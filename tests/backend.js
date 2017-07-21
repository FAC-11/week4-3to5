var test = require('tape');
var search = require("../src/search.js");

// test RegExp
test("findMatches", function(t) {
  var testString = "james, minesh, dak, jen"
  var query = 'ja';
  var actual = Array.isArray(search.findMatches(query, testString, 10));
  t.ok(actual, "returns array")
  t.end()
});

test("findMatches", function(t){
  var testString = "james, james, jam, ja, minesh, dak, jen"
  var query = 'ja';
  var expected = ['james', 'james', 'jam', 'ja'];
  var actual = search.findMatches(query, testString, 10)
  t.deepEqual(actual, expected, "entering 'ja' should return ['james', 'james', 'jam', 'ja']")
  t.end()
})

test("findMatches", function(t){
  var testString = "james, james, jam, ja, minesh, dak, jen, raja, baja, adjacent"
  var query = 'ja';
  var expected = ['james', 'james', 'jam', 'ja'];
  var actual = search.findMatches(query, testString, 10)
  t.deepEqual(actual, expected, "entering 'ja' should not return words with 'ja' in the middle")
  t.end()
})

test("findMatches", function(t){
  var testString = "james, james, james, james, james, james, james, james, james, james, james, james, james, james, james, james, james, james, james, james, james, james,jam, ja, minesh, dak, jen, raja, baja, adjacent"
  var query = 'ja';
  var expected = ['james', 'james', 'james', 'james', 'james', 'james', 'james', 'james', 'james', 'james'];
  var actual = search.findMatches(query, testString, 10)
  t.deepEqual(actual, expected, "entering 'ja' should return a maximum of 10 matches")
  t.end()
})
