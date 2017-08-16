/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var hash = {};

function codeGen() {
    var ans = "";
    while (ans.length !== 6) {
        ans += s[Math.floor(Math.random() *62)];
    }
    return ans;
}

var encode = function(longUrl) {
    var id = codeGen();
    while (hash[id] !== undefined) {
        id = codeGen();
    }
    hash[id] = longUrl;

    console.log(id);
    return "http://tinyurl.com/" + id;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    var id = shortUrl.substr(shortUrl.indexOf("com/")+4);
    console.log(id);
    return hash[id];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
