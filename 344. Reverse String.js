/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var arr = s.split("");
    var start = 0, end = s.length - 1, tmp;
    while (start < end) {
        tmp = arr[start];
        arr[start] = arr[end];
        arr[end] = tmp;
        start++;
        end--;
    }

    return arr.join("");
};
