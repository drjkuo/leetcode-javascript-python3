console.clear();
var ride = [
   {
      time: [700, 730],
      item: {
         apple: 2,
         brownie: 1
      }
   },
   // {
   //    time: [700, 720],
   //    item: {
   //       apple: 2,
   //       brownie: 1
   //    }
   // },
   {
      time: [710, 800],
      item: {
         apple: 1,
         carrots: 3
      }
   },

   {
      time: [720, 745],
      item: {
         apple: 1,
         brownie: 2,
         diamond: 4
      }
   }
];


function deepClone(obj) {
   return JSON.parse(JSON.stringify(obj));
}

function process_ride(ride) {
   var sortedEvents = [];
   var i, j, tmp;
   for (i=0; i<ride.length; i++) {
      tmp = new Object({
         se: true,
         time: ride[i].time[0],
         // item: new Object(ride[i].item)
         item: deepClone(ride[i].item)

      });
      sortedEvents.push(tmp);
      // tmp = {};
      tmp = new Object({
         se: false,
         time: ride[i].time[1],
         item: deepClone(ride[i].item)
      });
      sortedEvents.push(tmp);
      // tmp = {};
   }
   return sortedEvents;
}

// console.log(process_ride(ride));
sortedEvents = process_ride(ride)
   .sort(function (x,y) {
   if (x.time > y.time) return 1;
   else if (x.time === y.time && x.se === false && y.se === true) return 1;
   else return -1;
});
// console.log(sortedEvents);

// var i, j;
var SELen = sortedEvents.length;
for (let i=0; i<SELen; i++) {
   // merge same-time events
   for (let j=i+1; j<SELen; j++) {
      if ((sortedEvents[i].time === sortedEvents[j].time) && (sortedEvents[i].se === sortedEvents[j].se)) {
         console.log(sortedEvents[i], sortedEvents[j]);
         sortedEvents[i] = merge(sortedEvents[i], sortedEvents[j], true);
         console.log("merged");
         console.log(sortedEvents[i], sortedEvents[j]);
         // console.log(sortedEvents[i], sortedEvents[j]);
      }
      else break;
   }
   // sortedEvents.splice(i+1, j-i-1);
   // console.log("??");
}
console.log(sortedEvents);

var result = [];
var curSum = {};
for (let i=0; i<SELen; i++) {
   console.log("before", curSum);
   curSum.item = deepClone(merge(curSum, sortedEvents[i], sortedEvents[i]["se"])).item;
   curSum.time = sortedEvents[i].time;
   console.log("each", curSum);
   result.push(deepClone(curSum));
}
console.log("result!!", result);

// console.log(sortedEvents);
// console.log(
//    sortedEvents[0].item===sortedEvents[1].item,
//    sortedEvents[0].item===sortedEvents[2].item,
//    sortedEvents[0].item===sortedEvents[3].item
//    // sortedEvents[0]===sortedEvents[1]
// );


function merge (i, j, addOrDelete) {
   // console.log("i", i, "j", j);
   if (Object.keys(i).length === 0) return j;
   for (let key in j["item"]) {
      // console.log(obj);
      // if (i["item"].hasOwnProperty(key)) {
         // i.item[key] += j.item[key];
         if (addOrDelete) {
            if (i["item"].hasOwnProperty(key)) {
               i["item"][key] = (i["item"][key] || 0) + j["item"][key];
            }
            else {
               i["item"][key] = 0;
               i["item"][key] = j["item"][key];
            }

         }
         else {
            i["item"][key] = (i["item"][key] || 0) - j["item"][key];
         }
         console.log(i["item"][key]);
      // }
   }
   console.log("i", i, "j", j);
   return deepClone(i);
   // console.log(i);
}
// print_items_per_interval(sortedEvents) {


// }
