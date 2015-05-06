function isEven(n) {
  if (n < 0) {
    n += (-2 * n);
  }
  if (n == 1) {
    return false;
  } else if (n == 0) {
    return true;
  } else {
    return isEven(n - 2);
  }
}