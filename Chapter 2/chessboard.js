var gridHeight = 8;
var gridWidth = 8;
var grid = '';

for (var rows = 0; rows <= gridHeight; rows++) {
  for (var rowLength = 0; rowLength <= gridWidth; rowLength++) {
    if (rows % 2 == 0) {
      grid += (rowLength % 2 == 0) ? '#' : ' ';
    } else {
      grid += (rowLength % 2 == 0) ? ' ' : '#';
    }
  }  
  grid += '\n';
}

console.log(grid);