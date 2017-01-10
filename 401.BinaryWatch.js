/**
 * @param {number} num
 * @return {string[]}
 */

// n -> 0000:000000 -> digit of hr:min
// dfs

// Runtime: 96 ms

var readBinaryWatch = function(num) {
    var result = [];
    //var tmp = [];
    dfs(result,[],0,11,num);
    // console.log(result);
    return result;
};

var formatTime = function(h, m) {
    if (m < 10) {
        return `${h}:0${m}`
    } else {
        return `${h}:${m}`
    }
}

let convertToTime = function(d)
{
    let hr=0;
    let min=0;
    let hrd = [1,2,4,8]; // 0-3
    let mind = [1,2,4,8,16,32]; //4-9

    for (let i=0; i<d.length; i++)
    {
        if (i<=3)
        {
            hr += d[i]*hrd[i];
        }
        else
        {
            min += d[i]*mind[i-4];
        }
    }

    if (Number(hr)<=11 && Number(min)<=59) return formatTime(hr,min);
}

let dfs = function(result,tmp,clvl,tlvl,n)
{
    if (clvl === tlvl) return;

    if (n === 0)
    {
        if (convertToTime(tmp)) result.push(convertToTime(tmp));
        return;
    }

    tmp.push(0);
    dfs(result,tmp,clvl+1,tlvl,n);
    tmp.pop(0);

    tmp.push(1);
    dfs(result,tmp,clvl+1,tlvl,n-1);
    tmp.pop(1);
}
