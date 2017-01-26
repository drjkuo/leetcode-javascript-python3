// Runtime: 89 ms; 74%

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let indexf = 0;
    let indexr = numbers.length - 1;

    while (indexr > indexf)
    {
        if (target === (numbers[indexf] + numbers[indexr]))
        {
            return [indexf+1, indexr+1];
        }
        else if (target > (numbers[indexf] + numbers[indexr]))
        {
            indexf++;
        }
        else
        {
            indexr--;
        }
    }


};
