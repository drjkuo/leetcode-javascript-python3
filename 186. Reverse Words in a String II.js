/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify str in-place instead.
 */
var reverseWords = function(str) {
    // if (str.length === 0) return;
    // console.log(reverse(str));
    // reverse(str);
    reverse(str, 0, str.length-1);

    var head = 0, pointer = 0;
    while (pointer !== (str.length+1)) {
        if (str[pointer] === " " || pointer === str.length) {
            reverse(str, head, pointer-1);
            head = pointer+1;
        }
        pointer++;
    }
};

function reverse (str, start, end) {
    var p1 = start, p2 = end;
    var tmp;
    while (p2 > p1) {
        tmp = str[p1];
        str[p1] = str[p2];
        str[p2] = tmp;
        p2--;
        p1++;
    }
    return;
}
