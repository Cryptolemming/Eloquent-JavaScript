function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// my code starts here - I did not use average();
function lifeExpectancyByCentury(list) {
  var byCentury = {};
  list.forEach(function(person) {
    var century = Math.ceil(person.died/100);
    if (century in byCentury) {
     byCentury[century].sum += person.died - person.born;
     byCentury[century].count += 1
    } else {
      byCentury[century] = {sum: person.died-person.born, count: 1};
    }    
  });
  for (century in byCentury) {
    console.log(century + ': ' + byCentury[century].sum / byCentury[century].count + '\n');   
  }
}
lifeExpectancyByCentury(ancestry);