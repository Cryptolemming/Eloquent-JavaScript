function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(second) {
  return new Vector(second.x + this.x, second.y + this.y);
}

Vector.prototype.minus = function(second) {
  return new Vector(this.x - second.x, this.y - second.y);
}

Object.defineProperty(Vector.prototype, 'length', {
  get: function() {return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))}
})
