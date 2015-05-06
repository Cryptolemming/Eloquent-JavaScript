function deepEqual(a, b) {
  // value comparison
  if (a === b) { return true };
  
  var propaCount = 0;
  var propbCount = 0;
  
  // object comparison
  if (typeof(a) == 'object' && typeof(b) == 'object' && a != null && b != null) {
    // count the properties in object a
    for (var prop in a) {
      propaCount += 1;
    }
    // starting comparing properties of b in a and recursively comparing the values
    for (var prop in b) {
      propbCount += 1;    
      if (!(prop in a) || !deepEqual(a[prop], b[prop])) {
        return false;  
      }
    }
  // if the object test fails
  } else {
    return false;
  }
  return propaCount == propbCount;
}  