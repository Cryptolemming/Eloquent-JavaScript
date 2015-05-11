function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// my code starts here
var hasMother = ancestry.filter(function(person) {
  return byName[person.mother];
});

var ageDifference = hasMother.map(function(person) {
  return byName[person.name].born - byName[person.mother].born;
});

console.log(average(ageDifference));