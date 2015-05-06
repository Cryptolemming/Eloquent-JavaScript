function reverseArray(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i <= Math.floor(array.length / 2); i++) {
    var placehold = array[i];
    array[i] = array[array.length-i-1];
    array[array.length-i-1] = placehold;
  }
  return array;
}