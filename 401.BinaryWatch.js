/**
 * @param {number} num
 * @return {string[]}
 */

// n -> 0000:000000 -> digit of hr:min
// dfs

var readBinaryWatch = function(num) {
    var result = [];
    //var tmp = [];
    let hr = [1,2,4,8]; // 0-3
    let min = [1,2,4,8,16,32]; //4-9
    dfs(result,[],0,9,num);
    console.log(result);
    return result;
};

let dfs = function(result,tmp,clvl,tlvl,n)
{
    if (clvl === tlvl || n === 1)
    {
        result.push(tmp);
        return;
    }
    //let tmp = t;
    tmp.push(0);
    dfs(result,tmp,clvl+1,tlvl,n-1);
    tmp.pop(0);

    tmp.push(1);
    dfs(result,tmp,clvl+1,tlvl,n-1);
    tmp.pop(1);
    // for (let i=0; i<2; i++) dfs(result,clvl+1,tlvl)
}
