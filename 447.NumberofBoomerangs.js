/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let ans=0;
    for (let i=0; i<points.length; i++)
    {
        let hashmap = {};
        for (let j=0; j<points.length; j++)
        {

            let key = Math.pow(points[i][0]-points[j][0],2) + Math.pow(points[i][1]-points[j][1],2);
            // ans += (hashmap[key] || 0) * 2;
            hashmap[key] = (hashmap[key] || 0) + 1;
        }

        for (let x in hashmap)
        {
            ans += hashmap[x]*(hashmap[x]-1);
        }
        // hashmap = null;
        // delete hashmap;

        // console.log(hashmap);
    }
    return ans;
};

