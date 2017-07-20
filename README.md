# Auto-Poké

## Why
### User Persona
Ash __loves__ Pokemon. And we mean LOVES. He can't for the life of him remember let alone spell half of their names. Poor Ash.
Currently he has to look in his Pokédex which is totally unreliable. He feels like he's living in the '90s, still using his Pokedex. He wishes he could just search using his smartphone for any Pokemon name and find the crucial stats he needs to become a true Pokemon master.

### User Journey
Ash would simply go to (insert URL) and type the starting letter of the Pokemon he wants information on. Hey Presto! The auto complete will populate the drop down with the top 10 matching Pokemon to the letters he can remember.

## What
We're creating a Pokemon auto complete search bar to help Ash.

## How
The main tasks we had to do were:
- [x] Architecting the software design
- [x] Create back-end to filter through the searches
- [x] Have an input field in the front-end
- [x] Auto-complete the input field
- [ ] Testing front-end __and__ back-end

We did this by blah blah blah .....

## Stretch Goals
- [ ] To get all stats for a Pokemon from the Poké API.
- [ ] Add Poké theme tune and color scheme because we want to be the very best.

## How did we split up work?

## How did you pair?

## What did you learn?
* The 'call' method on functions allows you to use array methods on NodeLists
  and HTML Collections e.g.
  ```
  Array.prototype.forEach.call(yourNodeList, function(element) {
  // Do your stuff with each element of your nodelist
  });
  ```
* When putting a regex in a string literal you need one more round of escaping:
  e.g. `/\w/` becomes `'\\w'` or in our case we used `'\\b' + searchTerm + '\\w*'`

## Resources
* [Call
method](http://clubmate.fi/the-intuitive-and-powerful-foreach-loop-in-javascript/#Looping_HTMLCollection_or_a_nodeList_with_forEach)
* [Double escaping string
regexes](https://stackoverflow.com/questions/2712878/javascript-regex-pattern-concatenate-with-variable/2712896#2712896)
