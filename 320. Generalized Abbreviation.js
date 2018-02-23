/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
    var wlen = word.length;
    var result = [];
    for (var i=0; i<Math.pow(2,word.length); i++) {
        var s = i.toString(2);
        while(s.length < word.length) {
            s = "0" + s;
        }
        s = s.split("");

        for (var j=0; j<s.length; j++) {
            if (s[j] === "0") s[j] = word[j];
        }

        var oneAns = [], tmp = 0;
        for (var j=0; j<s.length; j++) {
            if (s[j] === "1") tmp += 1;
            else {
                if (tmp>0) oneAns.push(tmp);
                tmp = 0;
                oneAns.push(s[j]);
            }
            if (j === s.length-1 && s[j] === "1") oneAns.push(tmp);
        }
        result.push(oneAns.slice().join(""));
    }

    return result;

};
