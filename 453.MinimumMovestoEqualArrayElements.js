/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let minNums = Math.min(...nums);
    let nl = nums.length;
    let ans = 0;
    for (let i=0; i<nl; i++)
    {
        ans += (nums[i] - minNums);
    }

    return ans;
};

/*
misunderstood the question
a,b,c //assuming sorted
a-c,b-c,0 how to make it 0,0,0

after c-b moves, a-b,0,0
-1,0,0 needs 2 moves
-2,0,0 after 2 moves becomes -1,0,0
-3,0,0 after 2 moves becomes -1,1,1(-2,0,0)
-4,0,0 after 2 moves becomes -2,1,1(-3,0,0)


*/
