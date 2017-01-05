/**
 * @param {string} s
 * @return {number}
 */

// Runtime: 122 ms
var titleToNumber = function(s) {
    // let arrS = s.split("");
    let sum = 0;
    let sl = s.length;
    for (let i=0; i<sl; i++)
    {
        sum += (s.charCodeAt((sl-1)-i)-64)*Math.pow(26,i); // return 65
        //chr = String.fromCharCode(65 + n);
    }

    return sum;

};
