/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
  var graphPrice  = [];
  var oneRow = [];
  var i;
  var cheapest = Infinity;
  var result = [];
  for (i=0; i<n; i++) oneRow.push(-1);
  for (i=0; i<n; i++) graphPrice.push(oneRow.slice());
  var matrix = flights;
  for (i=0; i<matrix.length; i++) {
    graphPrice[matrix[i][0]][matrix[i][1]] = matrix[i][2];
  }
  console.log(graphPrice);

  var visited = [];
  visited.push(src);
  DFS(graphPrice, 0, visited, K+1, src);
  // console.log(result);
  return isFinite(cheapest)? cheapest : -1;

  function DFS(matrix, onePrice, visited, limit, curCity) {
    // console.log(visited);
    if (curCity === dst && onePrice < cheapest && visited.length <= limit+1) {
        cheapest = onePrice;
        result.push(visited.slice());
        return;
    }
    // end condition
    if (visited.length >= limit+1 || onePrice > cheapest) return;
    // if (visited.length === limit && visited.indexOf(dst)!== -1)

    var toBeVisited = [];
    for (var i=0; i<n; i++) {
      if (matrix[curCity][i] !== -1 && visited.indexOf(i) === -1) {
        toBeVisited.push(i);
        // console.log(visited);
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
};
