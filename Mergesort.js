
/*
function mergesort(arr, start, end) {
  while (start < end) {
    var mid = Math.floor((start + end) / 2);
		//console.log('mid', mid);
    var arrA = mergesort(arr, start, mid);
    var arrB = mergesort(arr, mid + 1, end);
    return merge(arrA, arrB);
  }
}*/

function mergesort(arr) {
    if(arr.length === 1) {
      return arr;
    }
  //while (arr.length > 1) {
    var mid = parseInt(arr.length/2);
		//console.log('mid', mid);
    var arrA = arr.slice(0, mid);
    var arrB = arr.slice(mid, arr.length);
    return merge(mergesort(arrA), mergesort(arrB));
  //}
}

function merge(arrA, arrB) {
  var idxA = 0,
    idxB = 0;
  var ans = [];
  while (idxA < arrA.length && idxB < arrB.length) {
    if (arrA[idxA] < arrB[idxB]) {
      ans.push(arrA[idxA]);
      idxA++;
			console.log(ans);
    }
		else {
      ans.push(arrB[idxB]);
      idxB++;
			console.log(ans);
    }
  }

  if (idxA < arrA.length) {
    ans.push(...arrA.slice(idxA, arrA.length));
		console.log(ans);
  }
  if (idxB < arrB.length) {
    ans.push(...arrB.slice(idxB, arrB.length));
		console.log(ans);
  }

	return ans;
}

var arrB = [1,3];
var arrA = [2, 4, 7, 8, 9];
//console.log(merge(arrA, arrB));
var arr = [3, 1, 2, 4, 5];
var len = arr.length-1;
console.log(mergesort(arr));
