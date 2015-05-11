function every(array, value) {
  var state = undefined;
  for (var i = 0; i < array.length; i++) {
    if (value(array[i]) == true) {
      state = true;
    } else {
      return false;  
    }
  }
  return state;
}

function some(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value(array[i]) == true) {
      return true;  
    } else {
      return false;  
    }  
  }
}