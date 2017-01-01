/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
    let sl = s.length;
    let arr = s.split(""); //split string to array
    let ans = [];
    let tmp;
    for (let i=0; i<sl-1; i++)
    {
        if (arr[i] === "+" && arr[i+1] === "+")
        {
            //tmp = s;
            arr[i] = "-";
            arr[i+1] = "-";
            ans.push(arr.join("")); // join array elements to string
            arr[i] = "+";
            arr[i+1] = "+";
        }
    }

    return ans;
};
