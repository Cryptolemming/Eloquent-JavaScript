function range(start, end, step) {
  var array = [];
  if (step === undefined) {
    step = 1;
  }
  for (var i = start; i !== end + step; i += step) {
    array.push(i);
  }
  return array;
}

function sum(array) {
  sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

