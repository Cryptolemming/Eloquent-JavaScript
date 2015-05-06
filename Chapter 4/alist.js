function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  var array = [];
  for (var i = list; i; i = i.rest) {
    array.push(i.value);
  }
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, value) {
  while (value > 0) {
    value --;
    return nth(list.rest, value);
  }
  return list.value;
}