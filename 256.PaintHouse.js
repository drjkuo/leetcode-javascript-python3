//Runtime: 109 ms; 50%
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    //cost: array of n x 3
    //calculate accumulated cost with certain color on every house then the last house
    //dp[i][0] = min (dp[i-1][1],dp[i-1][2]) + cost[i,0]
    // let dp = [];
    if (costs.length === 0) return 0;
    let i=1;
    for (; i<costs.length; i++)
    {
        costs[i][0] += Math.min(costs[i-1][1],costs[i-1][2]);
        costs[i][1] += Math.min(costs[i-1][0],costs[i-1][2]);
        costs[i][2] += Math.min(costs[i-1][0],costs[i-1][1]);
    }

    i--;
    return Math.min(costs[i][0], costs[i][1], costs[i][2]);

};
