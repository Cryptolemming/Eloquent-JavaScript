function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e intsanceof MultiplicatorUnitFailure) {
        throw e;
      }
    }
  }
}