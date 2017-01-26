// 121. Best Time to Buy and Sell Stock // last two day in TW // last day in TW
// Runtime: 115 ms; 61%

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // for (let i=0; i<prices.length; i++)

    if (prices.length === 0) return 0;
    let minp = Number.MAX_SAFE_INTEGER;
    let minprices = [];
    for (let i=0; i<prices.length; i++)
    {
        if (prices[i] < minp) minp = prices[i];

        minprices.push(minp);
    }

    let ans = 0;

    for (let i=0; i<prices.length; i++)
    {
        if ((prices[i] - minprices[i]) > ans) ans = prices[i] - minprices[i];
    }

    return ans;

};
