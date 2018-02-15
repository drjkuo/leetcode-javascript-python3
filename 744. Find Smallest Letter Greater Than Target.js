/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    letters.sort(function(x,y) {
        if (x>y) return 1;
        else return -1;
    });
    var start=0, end=letters.length-1, mid=parseInt((start+end)/2);
    while (start+1 < end) {
        if (letters[mid] <= target) {
            start = mid;
            mid = parseInt((start+end)/2);
            continue;
        }
        else {
            end = mid;
            mid = parseInt((start+end)/2);
            continue;
        }
    }

    if (target < letters[start])
        return letters[start];
    else if (target < letters[end])
        return letters[end];
    else if (end === letters.length-1)
        return letters[0];
    else
        return letters[end+1];

};
