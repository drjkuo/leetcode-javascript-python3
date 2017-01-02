/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort(function(a, b){return a-b});
    s.sort(function(a, b){return a-b});
    let gl=g.length;
    let sl=s.length;
    let ans=0;

    for (let i=0, j=0; i<gl && j<sl; ) // i: index for g; j: index for s
    {
        if (g[i] <= s[j]) // cookie is big enough for child
        {
            ans++;
            i++;
            j++;
        }
        else // cookie is too small
        {
            j++;
        }
    }

    return ans;

};
