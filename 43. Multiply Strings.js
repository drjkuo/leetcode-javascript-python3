/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (parseInt(num1) === 0 || parseInt(num2) === 0) return "0";
    num1 = num1.split("").reverse().join("");
    num2 = num2.split("").reverse().join("");
    var result = [];

    for (var i=0; i<num1.length; i++) {
        for (var j=0; j<num2.length; j++) {
            var n1 = parseInt(num1[i]);
            var n2 = parseInt(num2[j]);
            var tmp = n1*n2;
            result[i+j] = result[i+j] || 0;
            result[i+j+1] = result[i+j+1] || 0;
            result[i+j+1] = result[i+j+1] + parseInt((tmp/10)+(result[i+j]/10));
            result[i+j] = (result[i+j]+tmp)%10;
        }
    }

    return result.reverse().join("").replace(/^0+/, '');

};
