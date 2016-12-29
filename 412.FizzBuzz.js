/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let str = [];
    let three = 3;
    let five = 5;
    for (let i=1; i<n+1; i=i+1)
    {
        if ((i % (three*five)) === 0)
        {
            str.push("FizzBuzz");
            continue;
        }

        if ((i % three) === 0)
        {
            str.push("Fizz");
            continue;
        }

        if (i % (five) === 0)
        {
            str.push("Buzz");
            continue;
        }

        str.push(i.toString());
    }

    return str;

};
