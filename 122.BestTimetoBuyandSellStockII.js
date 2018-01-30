// Runtime: 106 ms; 88%

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ans = 0;
    for (let i=1; i<prices.length; i++)
    {
        if (prices[i] > prices[i-1]) ans+=(prices[i] - prices[i-1]);
    }

    return ans;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var result = 0;
    for(var i=0; i<prices.length; i++) {
        if (i>0 && prices[i]>prices[i-1]) result += (prices[i]-prices[i-1]);
    }
    return result;
};
