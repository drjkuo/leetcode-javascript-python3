/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    if (x<0 || y<0 || typeof x !== "number" || typeof y !== "number") throw new Error("input error");

    var x1 = x.toString(2), x1len = x1.length;
    var y1 = y.toString(2), y1len = y1.length;

    if (x1len > y1len) {
        while (y1.length < x1len) {
            y1 = "0" + y1;
        }
    }
    else {
        while (x1.length < y1len) {
            x1 = "0" + x1;
        }
    }

    var result = 0;
    for (var i=0; i<x1.length; i++) {
        result += (parseInt(x1[i]) ^ parseInt(y1[i]));
    }

    return result;



};


/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    if (x<0 || y<0 || typeof x !== "number" || typeof y !== "number") throw new Error("input error");

    var result = 0;

    var z = x^y;
    for(; z; result++) {
        z = z & (z-1);
    }
    return result;

};
