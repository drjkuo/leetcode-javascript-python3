/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let str=[];
    let three = 3;
    let five = 5;
    for (let i=1; i<n+1; i=i+1)
    {
        let tmp = "";
        if (i % (three*five) === 0)
        {
            str.push("FizzBuzz");
        }

        else if (i % (three) === 0)
        {
            str.push("Fizz");
        }

        else if (i % (five) === 0)
        {
            str.push("Buzz");
        }

        else str.push(i.toString());

    }

    return str;

};



/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    if (typeof n !== "number") throw new Error("input error");

    var result = [];
    for (var i=1; i<=n; i++) {
        if (i%3 === 0 && i%5 === 0) {
            result.push("FizzBuzz");
            continue;
        }
        else if (i%3 === 0) {
            result.push("Fizz");
            continue;
        }
        else if (i%5 === 0) {
            result.push("Buzz");
            continue;
        }
        else {
            result.push(i.toString());
        }
    }

    return result;

};
