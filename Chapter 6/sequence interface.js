function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    if (sequence.stop()) {
	  	break;
    } else {
      console.log(sequence.go() + '\n');
    }
  }
}

function ArraySeq(array) {
	this.value = -1;
	this.array = array;
}

ArraySeq.prototype.go = function() {
  this.value++;
  return this.array[this.value]; 
}

ArraySeq.prototype.stop = function() {
  return (this.value == this.array.length - 1) ? true : false;
}