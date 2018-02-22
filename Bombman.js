// var _ = require('underscore');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);


var matrix = [
  ["0", "E", "0", "0", "W", "E"],
  ["E", "0", "E", "E", "W", "E"],
  ["0", "E", "0", "0", "W", "0"]
];

console.log(main(matrix));

function main(matrix) {
  var nRow = matrix.length;
  var nCol = matrix[0].length;
  var max = 0;
  var result = [-1,-1];

  for (var i=0; i<nRow; i++) {
    for (var j=0; j<nCol; j++) {
      if (matrix[i][j] === "0") killEnemy(i, j);
    }
  }

  return [result, max];



  function killEnemy(x, y) {
    var n=0;
    for(var i=x+1; i<nRow; i++) {
      if (matrix[i][y] === "E") n+=1;
      else if (matrix[i][y] === "W") break;
    }

    for(var i=x-1; i>-1; i--) {
      if (matrix[i][y] === "E") n+=1;
      else if (matrix[i][y] === "W") break;
    }

    for(var i=y+1; i<nCol; i++) {
      if (matrix[x][i] === "E") n+=1;
      else if (matrix[x][i] === "W") break;
    }

    for(var i=y-1; i>-1; i--) {
      if (matrix[x][i] === "E") n+=1;
      else if (matrix[x][i] === "W") break;
    }

    if (n > max) {
      max = n;
      result = [x, y];
    }

    return;
  }


};
