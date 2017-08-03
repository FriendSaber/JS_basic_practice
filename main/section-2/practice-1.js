'use strict';

var Exports2_1 = function () {
  module.exports = function countSameElements(collection) {
      var  arr = new Array();

      arr.push({key: collection[0], count: 1});
      for(var i=1;i<collection.length;i++){
        var flag=0;
        for(var j=0;j<arr.length;j++){
          if(collection[i]===arr[j].key){
            arr[j].count++;
            flag=1;
            break;
          }
        }
        if(flag===0){
          arr.push({key: collection[i], count: 1});
              }
          }
          //for(var k=0;k<arr.length;k++){
          //  console.log(arr[k]);
          //}
          return arr;
      }
};
Exports2_1();
