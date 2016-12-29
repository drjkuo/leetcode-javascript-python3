 * @param {number[]} nums
 * @return {number[]}
 */
 /*
 4 3 2 7 8 2 3 1
 
 4 (3) 2 -7 8 2 3 1
 4 3 -(2) -7 8 2 3 1
 4 -3 -2 -(7) 8 2 3 1
 4 -3 -2 -7 (8) 2 -3 1
 4 -3 -2 -7 8 (2) -3 -1
 4 3 -2 -7 8 2 -(3) -1
 4 3 2 -7 8 2 -3 -(1)
 -4 3 2 -7 8 2 -3 -1
 */
 
 
var findDisappearedNumbers = function(nums) {
    //let x;
    let nl = nums.length;
    for (let i=0; i<nl; i=i+1) {
        let index = Math.abs(nums[i])-1; // be aware of negative index
        if (nums[index] > 0)
        {
            nums[index] = -nums[index];
        }
    }
    
    let ans=[];
    for (let i=0; i<nl; i=i+1) {
        if (nums[i] > 0) { ans.push(i+1); }
    }
    
    return ans;
};
