function countChar(string, letter) {
  var count = 0;
  for (var i = 0; i <= string.length - 1; i++) {
    if (string[i] == letter) {
      count++;
    }
  }
  return count;
}

function countBs(string) {
  return countChar(string, 'B');
}
