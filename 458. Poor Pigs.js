/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    if (typeof buckets !== "number" || typeof minutesToDie !== "number" || typeof minutesToTest !== "number") throw new Error("input error");
    return Math.ceil(Math.log(buckets)/Math.log((minutesToTest/minutesToDie)+1));
};
