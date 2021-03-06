# Auto-Poké

## Why
### User Persona
Ash __loves__ Pokemon. And we mean LOVES. After 20 years he has finally caught 'em all..until the next generation. He can't for the life of him remember let alone spell half of their names. Even worse he cant tell his balls apart! Poor Ash.
Currently he has to look in his Pokédex which is totally unreliable. He feels like he's living in the '90s, still using his Pokedex. He wishes he could just search using his smartphone for any Pokemon name and find the crucial stats he needs to become a true Pokemon master.

### User Journey
Ash would simply go to [this awesome website](https://pokeautocomplete.herokuapp.com/) and type the starting letter of the Pokemon he wants information on. Hey Presto! The auto complete will populate the drop down with the top 10 matching Pokemon to the letters he can remember.
He can then select the one he wants and press go to release the Pokémon on the grass to get some nice fresh air!

## What
We're creating a Pokemon auto complete search bar to help Ash find the pokemon he wants.

## How
The main tasks we had to do were:
- [x] Architecting the software design
- [x] Create back-end to filter through the searches
- [x] Have an input field in the front-end
- [x] Auto-complete the input field
- [ ] Testing front-end __and__ back-end

## Stretch Goals
- [ ] To get all stats for a Pokemon from the Poké API.
- [x] Add Poké theme tune and color scheme because we want to be the very best.

## How did we split up work?
![alt text](media/architecture_sketch.JPG)
* We tried pairing where someone was confident on the topic they were working on. 
* We then rotated pairs every half a day

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
