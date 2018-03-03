/*

"SF", "LA", 200
"LA", "HK", 1500
"HK", "SQ", 500
"SF", "SQ", 2500
"LA", "SQ", 2100
"SF", "IT", 2000

"SF" -> "SQ" limit 3

Find cheapest to destination.
There is a limit on number of flights you can take (variable).
Print the flight path.

*/

// SF: 0, LA: 1, HK, 2, SQ: 3, IT: 4

var matrix = [
 [0, 1, 200],
 [1, 2, 1500],
 [2, 3, 500],
 [0, 3, 2500],
 [1, 3, 2100],
 [0, 4, 2000]
];

var start = 0,
    end = 3,
    limit = 2,
    ncity = 5;

function main(matrix, start, end, limit, ncity) {
  var graphPrice  = [];
  var oneRow = [];
  var i;
  var cheapest = Infinity;
  var result = [];
  for (i=0; i<ncity; i++) oneRow.push(-1);
  for (i=0; i<ncity; i++) graphPrice.push(oneRow.slice());

  for (i=0; i<matrix.length; i++) {
    graphPrice[matrix[i][0]][matrix[i][1]] = matrix[i][2];
  }
  // console.log(graphPrice);

  var visited = [];
  visited.push(start);
  DFS(graphPrice, 0, visited, limit, start);
  return [result, cheapest];


  function DFS(matrix, onePrice, visited, limit, curCity) {
    // console.log(visited);
    if (curCity === end && onePrice < cheapest && visited.length <= limit+1) {
        cheapest = onePrice;
        result.push(visited.slice());
        return;
    }
    // end condition
    if (visited.length >= limit+1) return;
    // if (visited.length === limit && visited.indexOf(end)!== -1)

    var toBeVisited = [];
    for (var i=0; i<ncity; i++) {
      if (matrix[curCity][i] !== -1 && visited.indexOf(i) === -1) {
        toBeVisited.push(i);
        console.log(i);
      }
    }

    for (var i=0; i<toBeVisited.length; i++) {
      // toBeVisited is in the visited arr
      onePrice += matrix[curCity][toBeVisited[i]];
      visited.push(toBeVisited[i]);
      DFS(matrix, onePrice, visited, limit, toBeVisited[i]);
      onePrice -= matrix[curCity][toBeVisited[i]];
      visited.pop();
    }

  }

}

console.log(main(matrix, start, end, limit, ncity));
