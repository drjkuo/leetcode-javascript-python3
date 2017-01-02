/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    let i1=-1;
    let i2=-1;
    let wl=words.length;
    let ans=wl-1; // setup ans is essential!
    for (let i=0; i<wl; i++)
    {
        if (words[i] === word1)
        {
            i1 = i;
        }

        if (words[i] === word2)
        {
            i2 = i;
        }

        if (i1 !== -1 && i2 !== -1)
        {
            ans = Math.min(Math.abs(i1-i2), ans);
        }
    }

    return ans;
};
