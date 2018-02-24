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
    var id = shortUrl.replace("http://tinyurl.com/","");
    console.log(id);
    return hash[id];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

 /**
  * Encodes a URL to a shortened URL.
  *
  * @param {string} longUrl
  * @return {string}
  */

 var short2long = {};
 var long2short = {};
 var s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

 function shortGen() {
     var result = "";
     for (var i=0; i<6; i++) {
         result += s[Math.floor(Math.random()*s.length)%s.length];
     }
     return result;
 }

 var encode = function(longUrl) {
     // var longUri = longUrl.substring(longUrl.lastIndexOf("/")+1, longUrl.length);
     var short = "";

     if (long2short[longUrl] === undefined) {
         while(true) {
             if (short2long[shortGen()] === undefined) {
                 short = shortGen();
                 short2long[short] = longUrl;
                 long2short[longUrl] = short;
                 break;
             }
         }
     }
     else {
         short = long2short[longUrl];
     }

     return "http://tinyurl.com/"+short;

 };

 /**
  * Decodes a shortened URL to its original URL.
  *
  * @param {string} shortUrl
  * @return {string}
  */
 var decode = function(shortUrl) {
     var shortUri = shortUrl.substring(shortUrl.lastIndexOf("/")+1, shortUrl.length);
     if (short2long[shortUri] === undefined) throw new Error("not found");
     else return short2long[shortUri];
 };

 /**
  * Your functions will be called as such:
  * decode(encode(url));
  */
