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
