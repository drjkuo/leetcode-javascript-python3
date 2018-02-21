

var matrix = [
      [1, 1, 0, 1, 0], //1,1,0,4,0
      [1, 1, 0, 0, 1], //1,1,0,0,4
      [0, 0, 0, 0, 0], //0,0,1,0,0
      [1, 1, 0, 0, 1]  //1,1,0,0,20 group initial, 1,4,20 --- 3group
];


console.log(main(matrix));


function main(matrix) {


  // p = [0,1,......,19]

  function find(x) {
    if (x !== p[x]) p[x] = find(p[x]);
    return p[x];
  }

  function union(x,y) {
    var rootx = find(x);
    var rooty = find(y);

    if (rootx !== rooty) p[rooty] = rootx;
    return;
  }

  // 0,1,2,3,4 i=0
  // 5,6,7,8,9 i=1
  // colLen*i+j


  var rowLen = matrix.length;
  var colLen = matrix[0].length;

  var p = [];
  var i, j;
  for (i=0; i<rowLen*colLen; i++) {
    p.push(i);
  }


  for (i=0; i<rowLen; i++) {
    for (j=0; j<colLen; j++) {
      if (matrix[i][j] === 1) {
        // check adjacent points
        // i+1, j
        // i-1, j
        // i, j+1
        // i, j-1
        // i+1, j+1
        // i+1, j-1
        // i-1, j+1
        // i-1, j-1
        if (i+1<rowLen && matrix[i+1][j] === 1) union(colLen*i+j, colLen*(i+1)+j);
        if (i-1>-1 && matrix[i-1][j] === 1) union(colLen*i+j, colLen*(i-1)+j);
        if (j+1<colLen && matrix[i][j+1] === 1) union(colLen*i+j, colLen*i+(j+1));
        if (j-1>-1 && matrix[i][j-1] === 1) union(colLen*i+j, colLen*i+(j-1));
        if (i+1<rowLen && j+1<colLen && matrix[i+1][j+1] === 1) union(colLen*i+j, colLen*(i+1)+(j+1));
        if (i+1<rowLen && j-1>-1 && matrix[i+1][j-1] === 1) union(colLen*i+j, colLen*(i+1)+(j-1));
        if (i-1>-1 && j+1<colLen && matrix[i-1][j+1] === 1) union(colLen*i+j, colLen*(i-1)+(j+1));
        if (i-1>-1 && j-1>-1 && matrix[i-1][j-1] === 1) union(colLen*i+j, colLen*(i-1)+(j-1));
      }
      else { // 0
        p[colLen*i+j] = -1;
      }
    }
  }

  var set = new Set();

  console.log(p);

  for (i=0; i<p.length; i++) {
     if (p[i] > -1) set.add(find(i));
  }

  console.log(set);

  return set.size;


}
