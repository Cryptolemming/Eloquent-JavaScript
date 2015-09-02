var width = 10, height = 10;

// assign grid to a node
var gridNode = document.getElementById('grid');

// create array to hold the up to date checkboxes for the node
var checkboxes = [];

// create the grid
for(var y = 0; y < height; y += 1 ) {
	for(var x = 0; x < width; x += 1) {
	  // create a checkbox which will comprise the grid
	  var box = document.createElement('input');
	  // give the checkbox the appropriate type
	  box.type = 'checkbox';
	  // append the checkbox to the grid node;
	  gridNode.appendChild(box);
	  // add the checkbox to the checkboxes array
	  checkboxes.push(box);
	}
	// insert a break after every row
	gridNode.appendChild(document.createElement('br'));
}

// declare how to create the grid from the checkboxes array
function gridFromCheckboxes() {
	return checkboxes.map(function(box) {return box.checked;});
}

// create the grid showing the boxes in their current checked state
function checkboxesFromGrid(grid) {
	return grid.forEach(function(value, i) {checkboxes[i].checked = value;});
}

// create a grid randomizer
function randomGrid() {
	var result = [];
	for(var i = 0; i < width * height; i += 1) {
		result.push(Math.random() > 0.3);
	}
	return result;
}

// call to create a grid for a new game with randomized checkboxes
checkboxesFromGrid(randomGrid());

// count the number of checkboxes around a checkbox
function countNeighbors(grid, x, y) {
	var count = 0;
	// count the checkboxes 1 above and 1 below
	for(var y1 = Math.max(0, y - 1); y1 <= Math.min(height - 1, y + 1); y += 1) {
		// count the checkboxes on either side including diagonals
		for(var x1 = Math.max(0, x - 1); x1 <= Math.min(width, x + 1); x += 1) {
			// count the box making sure to omit counting the current checkbox of interest
			if((x1 !== x || y1 !== y) && grid[x+y * width]) {
				count += 1;
			}
		}
	}
	return count;
}

// update the grid with new generation of checkboxes based on game parameters
function nextGeneration(grid) {
	var newGrid = new Array(width * height);
	for(var y = 0; y < height; y += 1) {
		for(var x = 0; x < width; x += 1) {
			var neighbors = countNeighbors(grid, x y);
			var offset = x + y * width;
			if(neighbors < 2 || neighbors > 3) {
				newGrid[offset] = false;	
			}
			else if(neighbors === 2) {
				newGrid[offset] = true;
			}
		}
	}
	return newGrid;
}

// call to create the new turn grid
function turn() {
	checkboxesFromGrid(nextGeneration(gridFromCheckboxes()));
}

// assign the turn function to the 'next' button
document.getElementById('next').addEventListener('click', turn);

// assign the 'Autorun' interval and turn calls
var running = null;
document.getElementById('auto').addEventListener('click', function() {
	if(running) {
		clearInterval(running);
		running = null;
	} else {
		running = setInterval(turn, 400);
	}
});

