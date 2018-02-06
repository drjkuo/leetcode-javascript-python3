/**
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(s) {
  var result = [];
  var oneAns = [];
  helper (result, oneAns, 0, s, 0);
  return result;
}

function isValid (segment) {
    if (segment.length > 3) return false;
    if (segment.length === 2 && segment[0] === '0') return false;
    if (segment.length === 3 && segment[0] === '0' ) return false;
    var segmentInt = parseInt(segment);
    if (segmentInt < 0 || segment > 255) return false;
    return true;
}

function helper (result, oneAns, pos, s, part) {
  if (pos === s.length && part === 4) {
    result.push(oneAns.slice().join("."));
    return;
  }

  if (pos !== s.length && part === 4) {
    return;
  }


  var segment;
  for (var i=0; i<4; i++) {
    segment = s.substring(pos, pos+i+1);
    // segment = parseInt(segment);

    // if (segment >= 0 && segment <=255) {
    if (isValid(segment)) {
      oneAns.push(segment);
      helper(result, oneAns, pos+i+1, s, part+1);
      oneAns.pop();
    }
  }



}
