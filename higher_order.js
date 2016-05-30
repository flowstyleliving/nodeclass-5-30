var animals = [
  {name: 'Fluffy', species: 'rabbbit'}, //0
  {name: 'Holla', species: 'dog'}, //1
  {name: 'Athcha', species: 'dog'},
  {name: 'Bloop', species: 'fish'},
  {name: 'Meow', species: 'cat'},
  {name: 'Poop', species: 'human'} //5
];

var orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325},
]

// camelCase
// reallyCamelCase
// snake_case
// really_snake_case
// PascalCase
// ReallyPascalCase

let newAnimals = animals.map((animal) => {
  return animal.name + " is Michael's " + animal.species
})

console.log('These are my animals: ', newAnimals)

let newAnimals2 = animals.filter((animal) => {
  return animal.species === 'dog'
})

console.log('The dogs in the array are ', newAnimals2)

let newTotal = orders.reduce((sum, order) =>
  sum + order.amount, 0)

console.log('new total = ', newTotal);
