function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return (this.width >= this.inner.minWidth()) ? this.width : this.inner.minWidth();
}

StretchCell.prototype.minHeight = function() {
  return (this.height>= this.inner.minHeight()) ? this.height : this.inner.minHeight();
}

StretchCell.prototype.draw = function(width, height) {
  var result = this.inner['text'];
  result.push(repeat(' ', this.minWidth()));
  return result;
}