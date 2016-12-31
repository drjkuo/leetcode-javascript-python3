/**
 * @param {string} s
 * @return {boolean}
 */

// for..in..loop; set initial value

var canPermutePalindrome = function(s) {
     let sl = s.length;
    let hashmap = {};
    let oddcount=0;
    for (let i=0; i<sl; i++)
    {
        // ans = ans^s[i]; //xor
        hashmap[s[i]] = hashmap[s[i]] || 0; //set initial value;
        hashmap[s[i]]++;
        // console.log(s[i]+hashmap[s[i]]);
    }

    for (let x in hashmap)
    {
        // console.log(s[i]);
        if (hashmap[x] % 2 === 1)
        {
            oddcount++;
        }
    }

    return oddcount < 2;

};
